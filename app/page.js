import LikeButton from './like-button';

//Using a variable
function Header({ title }){
    console.log(title);
    return (<h1>{title}</h1>)
}

//Using props(object property) with dot notation
function Introduction(props){
    return <p>{props.name}</p>
}
            
//Using a template literal
function Paragraph({school}){
    return <p>{`I attended ${school}`}</p>
}

//Using the returned value of a function
 function GetAddress(address){
    if(address){
        return address;
    }else{
        return 'Unspecified';
    }
}

function Address({address}){
    return <p>{GetAddress(address)}</p>
}

//Using ternary operators
function Footer({email}){
    return <p>{email ? email : 'visit website for contact details'}</p>
}

//This calls the other functions
export default function HomePage() {
    //An Array
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (<div>
        <Header title="React"/>
        <Introduction name="My name is Eden" />
        <Paragraph school="the University of Northampton" />
        <Address address="924 lane road" />
        <Footer email="myemail@mayemaoil" />
        <Header title="BYE" />

        {/*Arrays and how to print them*/}
        <ul>
            {names.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
        <LikeButton />
    </div>
    );
}

