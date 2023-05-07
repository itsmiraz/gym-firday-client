
import ProductCard from '@/Components/Modules/ProductCard/ProductCard';
import iamge1 from '../../../Assets/products-images/gym-friday-dumblse.png'
import iamge2 from '../../../Assets/products-images/gym-friday-matress.png'
import iamge3 from '../../../Assets/products-images/gym-friday-pull.png'

export const productData = [
    {
        id: 1,
        productImg: iamge1,
        title: "Sporzon! Rubber Encased Hex Dumbbell",
        price: 12,
    },
    {
        id: 2,
        productImg: iamge2,
        title: "Iron Gym Pull-Up Bar - Total Upper Body Workout Bar for Doorway, Adjustable Width",
        price: 32,
    },
    {
        id: 3,
        productImg: iamge3,
        title: "BalanceFrom Puzzle Exercise Mat with EVA Foam Interlocking Tiles for MMA, Exercise,",
        price: 42,
    }
]



const Products = () => {
    return (
        <section className="px-10 pt-10">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Best Fitness Products</h1>
                <p className="text-sm cursor-pointer">View All</p>
            </div>
            <div className='grid gap-10 mt-10 grid-cols-1 md:gird-cols-2 lg:grid-cols-3 '>
                {
                    productData.map((data) => <ProductCard product={ data} key={data.id} />)
                }
            </div>
        </section>
    );
};

export default Products;