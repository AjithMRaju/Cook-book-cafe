import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Container,Row,Col} from "react-bootstrap";
import axiosinstance from '../../Docs/AxiosConfic';
import BoxCard from '../Cards/BoxCard/BoxCard';
import "./FoodCuntry.css";

const FoodCuntry = () => {

    
   
    const {urlParams}=useParams();
    const [contryFood,setCountryFood] = useState([]);

    const getData = async () =>{
        try {
            const response = await axiosinstance.get(`filter.php?${urlParams}`);
            setCountryFood(response.data.meals);
            console.log(response.data.meals)
          } catch (error) {
            console.error("Error fetching data:", error);
          }
    };

   


    useEffect(()=>{
        getData();
    },[])

  return (
    <section className='sectionStyle'>
        <Container className='pt-5'>
            <h1 className='pb-4 mt-5 text-center' style={{color:"#b3b3b3"}}>Pickup your favorite</h1>
            <Row className='mt-5 justify-content-center'>
                {
                    contryFood ? (
                        contryFood.map((food,index) =>{
                            return(
                                <Col xs={6} sm={4} md={4} lg={2} xxl={2} className='mb-3' key={index}>
                                    <BoxCard {...food} isActive/>
                                </Col>
                            )
                        })
                    ) : (
                        <p>Loadig...</p>
                    )
                }
            </Row>
        </Container>
    </section>
  )
}

export default FoodCuntry
