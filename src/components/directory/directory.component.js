import CategoryItem from "../category-item/category.item.component";
import "./directory.styles.scss";

const Directory = ({ categoryData }) => {
    return (
        <div className="directory-container">
            {categoryData.map((category) => {
                return (
                    <CategoryItem key={category.id} category={category} />
                )
            })}



        </div>
    )
};

export default Directory;