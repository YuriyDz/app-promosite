import "./chatTable.css"
export const needUnder = (text) => {
    if(text.length <= 50){
        return <p>{text}</p>;
    }
    else{
        let len = text.length;
        let arr = [];
        for(let i = 0;i < len;i=i+50){
            let sa = text.split('',50);
            let r = sa.join('');
            arr.push(r);
            text = text.substring(50,text.length);
        }
        const arrn = arr.map((value) => {
            console.log(value);
                return <p>{value}</p>;
            }
        ); 
    return arrn;
    }
};
function conwertWithObjectToMas(obj){
    let arr = [];
    for(let j in obj){
        let arrPush = [];
for(let i in obj[j]){
arrPush.push(obj[j][i]);
}
arr.push(arrPush);
}
return arr;
}
export const ChatTable = ({userOwner,cid,func,chatTable,funcSeve}) => {
const mas = conwertWithObjectToMas(chatTable);
    const chatDataRenderer = mas.map((value,index) => {
        if(cid == index){
            if(value[0] == userOwner){
                return(
                    <p className='card1'>
                        <button className='button' onClick={() => func(index)}>
                           <b className='user'>{" "}you{" "}</b>
                           <p className='text'>{needUnder(value[1])}</p>
                        </button>
                    </p>
                ); 
            }
            else{
                return(
                    <p className='card2'>
                        <button className='button' onClick={() => func(index)}>
                           <b className='user'> {value[0]} </b>
                           <p className='text'>{needUnder(value[1])}</p>
                        </button>
                    </p>
                    ); 
            }
        }
        else{
            if(value[0] === userOwner){
                return(
                    <p className='card7'>
                        <button className='button' onClick={() => func(index)}>
                            <b className='user'> you </b>
                            <p className='text'>{needUnder(value[1])}</p>
                        </button>
                    </p>
                );
            }
            else{
                return(
                    <p className='card7'>
                        <button className='button' onClick={() => func(index)}>
                            <b className='user'> {value[0]} </b>
                            <p className='text'>{needUnder(value[1])}</p> 
                        </button>
                    </p>
                );
            }
        }
    }
);
funcSeve();
return chatDataRenderer;
}

    
