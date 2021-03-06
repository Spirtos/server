import { check } from 'k6';
import http from 'k6/http';

export let options = {
  //noConnextionRefuse: false,
  stages: [
      { duration: "1s", target: 100 },
  ]
}

export default function() {
  http.batch([
    "https://absolutbank.by",
    "http://absolutbank.by",
    "http://belgazprombank.by",
    "https://belgazprombank.by",
    "http://bspb.ru",
    "https://bspb.ru",
    "http://ubrr.ru",
    "https://ubrr.ru",
    "https://alfabank.by",
    "http://alfabank.by",
    "http://www.belveb.by",
    "https://www.belveb.by",
    "http://belarus.by",
    "https://belarus.by",
    "https://www.vtb.by",
    "http://www.vtb.by",
    "https://minsknews.by/",
    "http://minsknews.by/",
    "http://reform.by",
    "http://vtb.by",
    "http://rbank.by",
    "http://belapb.by",
    "http://www.belinvestbank.by",
    "http://belarusbank.by",
    "http://bnb.by",
    "http://btabank.by",
    "http://bsb.by",
    "http://www.mtbank.by",
    "http://sber-bank.by",
    "http://mtbank.by",
    "http://paritetbank.by",
    "http://rrb.by",
    "http://sber-bank.by",
    "http://stbank.by",
    "https://www.onliner.by/",
    "http://tb.by",
    "http://express-pay.by",
    "http://webpay.by",
    "http://tcbank.by",
    "http://fransabank.by",
    "http://zepterbank.by",
    "http://sputnik.by",
    "http://bepaid.by",
    "http://www.belassist.by",
    "https://citydog.by/",
    "http://easypay.by",
    "https://sputnik.by/",
    "http://webmoney.by",
    "http://webmoney.by",
    "http://artpay.by",
    "http://artpay.by",
    "https://reform.by",
    "https://vtb.by",
    "https://rbank.by",
    "https://belapb.by",
    "https://www.belinvestbank.by",
    "https://belarusbank.by",
    "https://bnb.by",
    "https://btabank.by",
    "https://bsb.by",
    "https://www.mtbank.by",
    "https://sber-bank.by",
    "https://mtbank.by",
    "https://paritetbank.by",
    "https://rrb.by",
    "https://sber-bank.by",
    "https://stbank.by",
    "https://www.onliner.by/",
    "https://tb.by",
    "https://express-pay.by",
    "https://webpay.by",
    "https://tcbank.by",
    "https://fransabank.by",
    "https://zepterbank.by",
    "https://sputnik.by",
    "https://bepaid.by",
    "https://www.belassist.by",
    "https://citydog.by/",
    "https://easypay.by",
    "https://sputnik.by/",
    "https://webmoney.by",
    "https://webmoney.by",
    "https://artpay.by",
    "https://artpay.by",
  ]);
};
