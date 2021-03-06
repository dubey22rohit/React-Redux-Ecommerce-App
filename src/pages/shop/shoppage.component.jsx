import React,{Component} from 'react'
import SHOP_DATA from './shoppage.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
class ShopPage extends Component{
    constructor(props){
        super(props)
        this.state = {
           collections : SHOP_DATA
        } 
    }
    render(){
        const {collections} = this.state
        return(
            <div className = 'shop-page'>
                {
                   collections.map((item)=>{
                       
                       return <CollectionPreview key = {item.id} title = {item.title} items = {item.items}/>
                   })
                }
            </div>
        )
    }
}
export default ShopPage