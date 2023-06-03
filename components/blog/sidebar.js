import Search from '../shared/ui/Search'
import CategoryFilter from '../shared/ui/CategoryFilter'
import RecentPost from './RecentPost'

const BlogSidebar = ({categories, authors, post,handleInput,handleCheckbox}) => {
    return (
        <div>
            <Search handleFilter={handleInput}></Search>
            <br></br>
            <CategoryFilter name={'category'} items={categories} heading='Filter by category' handleFilter={handleCheckbox}></CategoryFilter>
            <br></br>
            <CategoryFilter name={'author'} items={authors} heading='Filter by author' handleFilter={handleCheckbox}></CategoryFilter>
            <br></br>
            <RecentPost post={post}></RecentPost>
        </div>
    )
}

export default BlogSidebar