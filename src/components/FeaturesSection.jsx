import CarrotImage from "../../src/assets/feature1.jpg"
import LeafImage from "../../src/assets/feature2.jpg"
import SearchIcon from "../../src/assets/feature3.jpg"
const features=[
  {
    icon:CarrotImage,
    title:"Whole-food recipes",
    description:"Each dish uses everyday, unprocessed ingredients.",
  },
  {
    icon:LeafImage,
    title:"Minimum fuss",
    description:"All recipes are designed to make eating healthy quick and easy.",
  },
  {
    icon:SearchIcon,
    title:"Search in seconds",
    description:"Filter by name or ingredient and jump straight to the recipe you need.",
  },
]
function FeaturesSection() {

  return (
    <div className="py-20 bg-light-neutral-100">
    <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl sm:text-4xl font-semibold text-primary mb-6">
        What you will get
      </h2>
      {/* Features Gird */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* i will use map method */}
    {features.map((feature)=>(
       <div className="my-10">
        <div className="flex flex-col space-y-4 text-left">
        <div className="w-15 h-15 bg-white rounded-xl flex items-center
        justify-center my-10">
    <img src={feature.icon} alt=""className="w-12 h-12 object-contain hover:scale-105 transition-all duration-300" />
        </div>
        {/*Feature Text */}
    <h3 className="text-primary text-2xl font-semibold">{feature.title}</h3>
    <h3 className="text-secondary leading-relaxed text-l">{feature.description}</h3>
        </div>
    </div>
    ))}
  
      </div>
      </div>
    </div>
  )
}

export default FeaturesSection
