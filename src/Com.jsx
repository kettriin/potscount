import React, {useState} from "react";

const Com = () => {

    const initialState = [
        {id: 0, title: "InGreen MID", text: "Средний размер: 14d * 13h", links: "https://basket-06.wbbasket.ru/vol1034/part103494/103494862/images/big/1.webp", refs: "103494862", needed: 0},
        {id: 1, title: "ho'me SM", text: "Маленький: Высота 8см Ширина 10см", links: "https://basket-12.wbbasket.ru/vol1837/part183718/183718984/images/big/1.webp", refs: "183718984", needed: 0},
        {id: 2, title: "Гал Рук XSM", text: "Прозрачный под отростки с поддонами", links: "https://basket-16.wbbasket.ru/vol2499/part249932/249932672/images/big/1.webp", refs: "249932672", needed: 0},
    ]

    const [count, setCount] = useState(initialState);

    const likePot = (id) => {
        setCount(
          count.map((item) =>
            item.id === id ? { ...item, needed: item.needed + 1 } : item
          )
        );
      };
    
      const deletePot = (id) => {
        setCount(
            count.map((item) =>
                item.id === id ? { ...item, needed: item.needed - 1 } : item
            )
        );    
      };

    return(
        <div className="con">
                {count.map(({id, title, text, links, refs, needed}) =>
                    <div className="card col-md-3 m-4" key={id}>
                      <img src={`${links}`} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <p className="card-text">{refs}</p>

                        <div className="container row text-center">
                            <div className="col col-4 align-self-center">
                                <p className="display-6">{needed}</p>      
                            </div>

                            <div className="col d-md-bloc gap-2 d-grid col-8">
                                <button className="btn btn-primary" type="button" onClick={() => likePot(id)}>Больше</button>
                                <button className="btn btn-secondary" type="button" onClick={()=> deletePot(id)}>Меньше</button>
                            </div>
                        </div>
                      </div>
                    </div>)}
            
        </div>

    )
}

export default Com;