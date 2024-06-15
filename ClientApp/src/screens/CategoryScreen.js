import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CategoryList from '../components/category/CategoryList';
import {ip} from '../components/ip';


const CategoryScreen = () => {

    console.log("From the main ");
    console.log(ip);
    const [category,setCategory] = useState();

    useEffect(()=>{
        axios.get(`http://${ip}:3000/api/category`)
        .then(res => {
            setCategory(res.data);
            console.log("The Category");
            console.log(category);
        })
        .catch(e=>{
            console.log(`Error while fetching Category ${e}`);
        })

    },[]);
    return (
        <View>
            <View style={{padding:10}}>
                <Text style={{fontWeight:'800'}}>
                    Shop By Category
                </Text>
            </View>
            <CategoryList data={category}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default CategoryScreen;
