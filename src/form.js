import { useEffect, useState } from "react";

export default function Form() {
  return (
    <div className="">
      <Logo />
      <ul className="list-none">
        <FormInput />
      </ul>
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1 className="text-white font-alata text-5xl ">MoneyEx</h1>
    </div>
  );
}

// `https://api.frankfurter.app/latest?amount=100&base=EUR&to=USD`

function FormInput() {
  const [base, setBase] = useState("USD");
  const [rate, setRate] = useState("EUR");
  const [firstInput, setfirstInput] = useState(1);
  const [toInput, setToInput] = useState(0);

  function handlebase(value) {
    setBase(value);
    // setBase(console.log(value));
  }

  function onHandlerrate(value) {
    setRate(value);
  }

  function firstInputHandler(value) {
    setfirstInput(+value);
    console.log(+value);
  }
  function toHandler(value) {
    setToInput(value);
  }

  function TotalRage(data) {
    toHandler(+data);
  }

  useEffect(
    function () {
      async function FetchApi() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${firstInput}&from=${base}&to=${rate}`
        );
        const data = await res.json();

        console.log(data);
        // Get the conversion rate from the API
        const conversionRate = data.rates[rate];
        console.log(conversionRate);
        const convertedAmount = firstInput * conversionRate;
        TotalRage(convertedAmount);
      }
      FetchApi();
    },
    [firstInput, base, rate]
  );

  return (
    <form className="my-10">
      <li className="grid grid-cols-2 items-center gap-x-3">
        <select
          value={base}
          onChange={(e) => handlebase(e.target.value)}
          className="max-w-40 rounded-lg outline-none p-1"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>

        <input
          type="text"
          value={firstInput}
          onChange={(e) => firstInputHandler(e.target.value)}
          className="rounded-2xl text-[#708090] outline-none px-4 max-w-60"
        />
      </li>
      <li className="grid grid-cols-2 mt-3 items-center gap-x-3">
        <select
          value={rate}
          onChange={(e) => onHandlerrate(e.target.value)}
          className="max-w-40 rounded-lg outline-none p-1"
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <input
          type="text"
          value={toInput}
          onChange={setToInput}
          className="rounded-2xl text-[#ffff] outline-none px-4 max-w-60"
          disabled
        />
      </li>
      <p className="text-white mt-11 text-center inline-block">
        your money gonna be in x 0
      </p>
    </form>
  );
}
