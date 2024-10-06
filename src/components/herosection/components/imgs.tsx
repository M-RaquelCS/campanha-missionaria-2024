import peopleCollectingFoodImg from '../../../assets/medium-shot-people-collecting-food.jpg'
import angleChildrenHoldingHandsImg from '../../../assets/high-angle-children-holding-hands.jpg'

export function ImagesHeroSection() {
  return (
    <div className="flex flex-row items-center">
      <img
        src={angleChildrenHoldingHandsImg}
        className="bg-slate-400/10 max-w-[45%] rounded-3xl -mr-[50%] z-10"
        alt=""
      />
      <img
        src={peopleCollectingFoodImg}
        className="bg-slate-600 bg-auto bg-no-repeat bg-center max-w-[80%] rounded-3xl ml-auto -z-10"
        alt=""
      />
    </div>
  )
}
