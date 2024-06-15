import { Text ,FlatList} from "react-native";
import CategoryItem from "../components/CategoryItem";
import CategoryList from "../components/CategoryList";
import { CATEGORIES } from "../data/dummy-data";
import { useEffect, useState } from "react";
import axios from 'axios';
const AllCategoryScreen=()=>{
    const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //   fetchData();
    // }, []);
  
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:3000/api/data');
    //     // setCategories(response.data);
    //     console.log("Before");
    //     console.log(response.data);
    //     console.log("After");
    //   } catch (error) {
    //     console.error('Error fetching data from API:', error);
    //   }
    // };
return(
    <CategoryList data={CATEGORIES} />
);
}
export default AllCategoryScreen;
