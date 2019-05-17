import React from 'react';
import { Input } from '@stardust-ui/react';
import Listable from './Listable';
import * as data from './list.json';
import { List, Image } from '@stardust-ui/react';
import './App.css'

interface ISearchProp {
    query:string;
}

var jsonlist: Array<IItem> = [];

class Search extends React.Component<any, any>{

    constructor(props: ISearchProp){
        super(props);
        this.state = {query: props.query};
    }

    public handleOnChange(event: any) : void {
        this.setState({query: event.target.value});
    }

    public render() {
        return(
            <div>
              <div className="App-search">                
                <Input icon="search" placeholder="Search..." onChange={ e => this.handleOnChange(e)}/>
              </div>
              <div className="App-list">
                <Listable items={renderFromSearch(this.state.query)}></Listable>
              </div>
            </div>
        ); 

    }

    public getState(){
        return this.state.query;
    }

}

export interface IItem{
    key: string,
    header: string,
    content: string,
    media: any
  }


  interface IOptions{
    query: string,
    filter: string
  }

  const _render = (options: IOptions) => {

    var {query, filter} = options;

    doQuery(query);

    if (filter) 
      doFilter(filter);

    return jsonlist
  }

  
  const renderFromSearch = (query: string) => {
    var items: Array<IItem> = [];

    data.items.forEach(e => {
      var { name, description, image } = e;

      if(name.toLowerCase().includes(query.trim().toLowerCase())){
        var elem: IItem = {
          key: name, 
          header: name,
          content: description,
          media: <Image src={require(`./${image}`)} maxwidth="70px" avatar ></Image> 
        }
    
        items.push(elem)
      }
    });
  
    jsonlist=items;
    return items;
  }

  const doFilter = (filter: string) => {
    jsonlist = jsonlist.sort((a: IItem, b: IItem) => {
      if(a.key > b.key){
        return 1;
      }
      else{
        return -1;
      }
    })

  }

  const doQuery = (query: string) => {
    var items: Array<IItem> = [];

    data.items.forEach(e => {
      var { name, description, image } = e;

      if(name.toLowerCase().includes(query.trim().toLowerCase())){
        var elem: IItem = {
          key: name, 
          header: name,
          content: description,
          media: <Image src={require(`./${image}`)} maxwidth="70px" avatar ></Image> 
        }
    
        items.push(elem)
      }
    });
  
    jsonlist=items;
    return items;
  }



export default Search;