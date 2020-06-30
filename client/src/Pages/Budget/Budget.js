import React from "react";
import Header  from "../../components/BudgetHeader/BudgetHeader";
import  Balance  from "../../components/Balance/Balance";
import  TransactionList from "../../components/TransactionList/TransactionList";
import { TransactionForm } from "../../components/TransactionForm/TransactionForm";

import Calculator from "../../components/Calculator/Calculator";
import MiniCalendar from "../../components/MiniCalendar/MiniCalendar";

import { GlobalProvider } from "../../Context/GlobalState";
import "./Budget.scss";

function Budget() {
  return (
    <GlobalProvider> 
      <div className="row">
        <Header />
      </div>
      
      <div className="row">  
        {/* budget */}
        <div className="col l9 m12">
          <section className="budget__container">
           
            <TransactionForm />
            <Balance />
            <TransactionList />
          </section>
        </div>
        <div className="col l3 m12 ">
          {/* calculator */}
          <section className="row budget__cal">
           
          <MiniCalendar />
            
          </section>
          {/* calendar */}
          <section className="row budget__calc">
          
                
          <Calculator />
          </section>
        </div>
      </div>

      
    </GlobalProvider>
  );
}

export default Budget;
