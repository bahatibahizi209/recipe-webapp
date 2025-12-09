import Aboutimage from "../../assets/herobanner4.jpg"
import profile1 from "../../assets/profile1.jpg"
export default function Aboutpage() {
  return (
    <div className="min-h-screen bg-light-neutral-200">
      <section className="relative py-20 lg:py-32 overflow-hidden">
    <div className="container mx-auto px-4 text-center ">
    <h1 className="text-4xl font-bold text-center mb-10">Our Story</h1>
    <p className="text-xl text-gray-950 max-w-3xl mx-auto leading-relaxed mb-8">
    we believe that healthy eating shouldn't be complicated,time consuming, or boring.
    Our mission is to make nutritious cooking accessible to everyone.
    </p>
    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
    </div>
      </section>
    {/* STATS SECTION */}
    <section className="py-16 bg-white">
    <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    <div>
      {/* stats numbers */}
    <div className="w-16 h-16 bg-primary 
    rounded-2xl flex items-center justify-center mx-auto mb-4">
    </div>
    <h3 className="text-3xl font-black text-primary">Stats Number</h3>
    <p className="text-gray-950">Stats Label</p>
    </div>
    </div>
    </section>
    <section className="py-20 lg:py-20 lg:bg-light-neutral-100/20">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-10">
        Why We Started This Journey</h2>
        <div className="space-y-6 text-lg text-gray-950 leading-relaxed">
          <p>
            It all began in a small kitchen where our founder, struggling to balance a demanding
            career with healthy eating, realized that most "healthy" recipes were either too complicated
            or simply didn't taste good.
          </p>
          <p>
            We set out to change that. Every recipe on our platform is tested in real kitchens by real people
            with busy lives.
          </p>
          <p>
            Todays, we're proud to help thousands of people cook healthier meals without the stress-proving that
            good food doesn't have to be complicated.
          </p>
        </div>
      </div>
      <div className="relative">
      <img src={Aboutimage} alt="aboutimage" className="rounded-3xl shadow-xl" />
      </div>
    </div>
    </section>
      {/* values section */}
       <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-primary">Our Values</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      <div className="bg-neutral-50 p-8 rounded-3xl shadow-md hover:shadow-lg transition">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
          ICON
        </div>
        <h3 className="text-xl font-semibold text-primary">Value title</h3>
        <p className="text-gray-950">Value desc</p>
      </div>
      </div>
       </div>
      </section>
      {/* TEAM SECTION */}
      <section className="py-20 lg:py-32 bg-neutral-50">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-4xl font-bold text-primary mb-10">Meet Out Team</h3>
      <div className="grid md:grid-cols-3 gap-10">
      {/*use map method */}
      <div className="group">
      <img src={profile1} alt=""  className="w-48 h-48 rounded-full object-cover border-4
     border-white shadow-lg mb-4 mx-auto"/>
      <h3 className="text-2xl font-semibold text-primary">Member Name</h3>
      <p className="text-xl text-orange-400">Member Role</p>
      <p className="text-l text-gray-950">Member Bio</p>
      </div>  
      </div>
      </div>
      </section>
      <section className="py-20 bg-primary text-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Start Cooking?</h2>
      <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Join thousands of home cooks who have transformed their kitchens with
        our simple,healthy recipes.
      </p>
      <button className="bg-orange-400 text-white px-10 py-4 rounded-2xl text-l
      font-semibold hover:bg-orange-400 transition transform hover:scale-105 shadow-xl
      hover:shadow-2xl hover:cursor-pointer">
    Browse Recipes</button>
      </section>
    </div>
  )
}
