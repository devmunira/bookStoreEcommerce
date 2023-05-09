import React from 'react'
import Search from '../shared/ui/Search'
import CategoryFilter from '../shared/ui/CategoryFilter'
import RecentPost from './RecentPost'

const categories = [
  {item : 'Nobel' , count : 120} , 
  {item : 'Fictions' , count : 450} ,
  {item : 'Love Story' , count : 75} ,
  {item : 'Islamic Books' , count : 190} ,
  {item : 'Non-fictions' , count : 230} ,
  {item : 'Poem' , count : 159} ,
  {item : 'AI' , count : 845} ,
  {item : 'Nobel' , count : 35} ]
const BlogSidebar = () => {
  return (
    <div>
        <Search></Search>
        <br></br>
        <CategoryFilter categories={categories}></CategoryFilter>
        <br></br>
        <RecentPost></RecentPost>
    </div>
  )
}

export default BlogSidebar