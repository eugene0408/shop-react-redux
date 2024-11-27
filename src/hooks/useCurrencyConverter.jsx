import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


// Return price in USD if selected language is English
export const useCurrencyConverter = () => {
    const {i18n} = useTranslation()
    const [rate, setRate] = useState(null);
    const [error, setError] = useState(null);
    const fallbackRate = 41;

    useEffect(() => {
        const fetchRate = async () => {
            try {
                const response = await fetch(
                    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
                );
                if(!response.ok){
                    throw new Error ("Не вдалося отримати дані")
                };
                const data = await response.json();
                const usdRate = data.find(
                    (item) => item.ccy === "USD" && item.base_ccy === "UAH"
                  );
                setRate(usdRate);
            } catch (err) {
                setError("Не вдалося отримати дані про курс валют")
            }

        };

        fetchRate();

    }, []);


    const convertHrnToUsd = (amountInHrn) => {
        const exRate = rate ? rate : fallbackRate;
        return parseFloat(amountInHrn) / exRate
    };

    const convertCurrency = (amountInHrn) => {
        if(i18n.language === 'en') {
            return convertHrnToUsd(amountInHrn);
        }
        return parseFloat(amountInHrn) //if language is not english return hrn
    };
 

    return { convertCurrency }

}