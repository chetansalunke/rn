import { Text } from "react-native";
import ProductList from "../components/product/ProductList";
import { PRODUCT } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";

const ProductScreen=()=>{

const route = useRoute();

const catId = route.params.cat_id;

console.log(catId);

const selectedProduct = PRODUCT.filter((product)=> product.category_id === catId );

console.log(selectedProduct);



return <ProductList data={selectedProduct}/>
}
export default ProductScreen;
 