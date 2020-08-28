import React, { Component } from 'react'
import extend from 'lodash/extend'
import { SearchkitManager,SearchkitProvider,
  SearchBox, RefinementListFilter, Pagination,
  HierarchicalMenuFilter, HitsStats, SortingSelector, NoHits,
  ResetFilters, RangeFilter, NumericRefinementListFilter,
  ViewSwitcherHits, ViewSwitcherToggle, DynamicRangeFilter,
  InputFilter, GroupedSelectedFilters,
  Layout, TopBar, LayoutBody, LayoutResults,
  MenuFilter,
  ActionBar, ActionBarRow, SideBar } from 'searchkit'
import './index2.css'

const host = "http://localhost:9200/products"
const searchkit = new SearchkitManager(host)

const ProductHitsGridItem = (props)=> {
  const {bemBlocks, result} = props
  let url = "http://localhost:9200/products/" + result._source.brand
  const source = extend({}, result._source, result.highlight)
  return (
    <div className={bemBlocks.item().mix(bemBlocks.container("item"))} data-qa="hit">
      <h1>{result._source.brand}</h1>
      <h1>{result._source.price}</h1>
      <p>{result._source.name}</p>
      <a href={url} target="_blank">
         <img data-qa="poster" alt="Product" className={bemBlocks.item("poster")} src={result._source.image} width="170" height="240"/>
        {/* // <div data-qa="title" className={bemBlocks.item("title")} dangerouslySetInnerHTML={{__html:source.title}}></div> */}
      </a> 
    </div>
  )
}

const ProductHitsListItem = (props)=> {
  const {bemBlocks, result} = props
  let url = "http://localhost:9200/products/" + result._source.brand
  const source = extend({}, result._source, result.highlight)
  return (
    <div className={bemBlocks.item().mix(bemBlocks.container("item"))} data-qa="hit">
        <h1>{result._source.brand}</h1>
        <h1>{result._source.price}</h1>
        <p>{result._source.name}</p>
      <div className={bemBlocks.item("poster")}>
        <img alt={result._source.brand} data-qa="poster" src={result._source.image}/>
      </div>
      <div className={bemBlocks.item("details")}>
        {/* <a href={url} target="_blank"><h2 className={bemBlocks.item("title")} dangerouslySetInnerHTML={{__html:source.title}}></h2></a> */}
        {/* <h3 className={bemBlocks.item("subtitle")}>Released in {source.year}, rated {source.imdbRating}/10</h3> */}
        {/* <div className={bemBlocks.item("text")} dangerouslySetInnerHTML={{__html:source.plot}}></div> */}
      </div>
    </div>
  )
}


class App extends Component {
  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <Layout>
          <TopBar>
            <div className="my-logo">Product</div>
            <SearchBox autofocus={true} searchOnChange={true} prefixQueryFields={["brand^1"]}/>
          </TopBar>

        <LayoutBody>

          <SideBar>
            <HierarchicalMenuFilter fields={["category"]} title="category" id="category"/>
            {/* <MenuFilter
        field="category.name"
        title="category" id="category"/> */}
            {/* <RangeFilter min={0} max={10} field="imdbRating" id="imdbRating" title="IMDB Rating" showHistogram={true}/> */}
            {/* <InputFilter id="writers" searchThrottleTime={500} title="Writers" placeholder="Search writers" searchOnChange={true} queryFields={["writers"]} /> */}
            {/* <RefinementListFilter id="actors" title="Actors" field="actors.raw" size={10}/> */}
            {/* <RefinementListFilter id="writersFacets" translations={{"facets.view_more":"View more writers"}} title="Writers" field="writers.raw" operator="OR" size={10}/> */}
            {/* <RefinementListFilter id="countries" title="Countries" field="countries.raw" operator="OR" size={10}/> */}
            {/* <NumericRefinementListFilter id="runtimeMinutes" title="Length" field="runtimeMinutes" options={[
              {title:"All"},
              {title:"up to 20", from:0, to:20},
              {title:"21 to 60", from:21, to:60},
              {title:"60 or more", from:61, to:1000}
            ]}/> */}
          </SideBar>
          <LayoutResults>
            <ActionBar>

              <ActionBarRow>
                <HitsStats translations={{
                  "hitstats.results_found":"{hitCount} results found"
                }}/>
                <ViewSwitcherToggle/>
                <SortingSelector options={[
                  {label:"Relevance", field:"_score", order:"desc"},
                  {label:"High Price", field:"price", order:"desc"},
                  {label:"Low Price", field:"price", order:"asc"}
                ]}/>
              </ActionBarRow>

              <ActionBarRow>
                <GroupedSelectedFilters/>
                <ResetFilters/>
              </ActionBarRow>

            </ActionBar>
            <ViewSwitcherHits
                hitsPerPage={12} highlightFields={["brand","category"]}
                sourceFilter={["brand","name","price","category"]}

                hitComponents={[
                  {key:"grid", title:"Grid", itemComponent:ProductHitsGridItem, defaultOption:true},
                  {key:"list", title:"List", itemComponent:ProductHitsListItem}
                ]}
                scrollTo="body"
            />
            <NoHits suggestionsField={"title"}/>
            <Pagination showNumbers={true}/>
          </LayoutResults>

          </LayoutBody>
        </Layout>
      </SearchkitProvider>
    );
  }
}

export default App;