import "./../css/House.css";




const House = (props) => {
    return (
        <section id="house" className="main-content">
            <h1>{props.name}</h1>
            <img src={"https://portiaportia.github.io/json/images/house-plans/"+props.main_image} alt="house pic" />
            <p>Bedrooms: {props.bedrooms}</p>
        </section>
    );
};

export default House;