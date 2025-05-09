import React, {useState} from "react";

const Com = () => {
    const [count, setCount] = useState(0);

    const items = [0, 1, 2]
    const setOfTitles = ["InGreen MID", "ho'me SM", "Гал Рук XSM"];
    const setOfText = ["Средний размер: 14d * 13h", "Маленький: Высота 8см Ширина 10см", "Прозрачный под отростки с поддонами"];
    const setOfLinks = ["https://basket-06.wbbasket.ru/vol1034/part103494/103494862/images/big/1.webp", "https://basket-12.wbbasket.ru/vol1837/part183718/183718984/images/big/1.webp", "https://basket-16.wbbasket.ru/vol2499/part249932/249932672/images/big/1.webp"];
    const setOfRefs = ["103494862", "183718984", "249932672"]


    return(
        <div className="con">
            { 
                items.map(item => 
                    <div className="card col-md-3 m-4">
                      <img src={`${setOfLinks[item]}`} class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{setOfTitles[item]}</h5>
                        <p className="card-text">{setOfText[item]}</p>
                        <p className="card-text">{setOfRefs[item]}</p>

                        <div className="container row text-center">
                            <div className="col col-4 align-self-center">
                                <p className="display-6">{count}</p>      
                            </div>

                            <div className="col d-md-bloc gap-2 d-grid col-8">
                                <button class="btn btn-primary" type="button" onClick={()=>{setCount(count+1)}}>Больше</button>
                                <button class="btn btn-secondary" type="button" onClick={()=>{setCount(count-1)}}>Меньше</button>
                            </div>
                        </div>
                      </div>
                    </div>)
            }
            
            
        </div>

    )
}

export default Com;