import * as React from "react";

interface IProps {
  currency: string;
  price: number;
  locale: string;
}

const getFormattedPrice = (price: number, currency: string, locale: string ): string => {

  const formattedPrice = new Intl.NumberFormat(locale, {
    currency: currency,
    style: 'currency',
  }).format(price);
  return formattedPrice;
}

const Basics = (props: IProps) => {
  const { 
    price,
    currency,
    locale,
   } = props;


    return (
      <>
        <span>
          {getFormattedPrice(price, currency, locale)}
        </span>
      </>
    );
};

export default Basics;
