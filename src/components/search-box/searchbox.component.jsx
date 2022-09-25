import { Component } from "react";
import './search-box.component.styles.css'
class SearchBox extends Component
{
    render()
    {
        return(
        <input type='search' 
        className={`search-box ${this.props.className}`}
        placeholder={this.props.placeholder}
        onChange={
            this.props.onChange} />
        )
    }
}
export default SearchBox ;