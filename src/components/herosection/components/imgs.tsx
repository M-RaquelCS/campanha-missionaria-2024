import peopleCollectingFoodImg from '../../../assets/medium-shot-people-collecting-food.jpg'
import angleChildrenHoldingHandsImg from '../../../assets/high-angle-children-holding-hands.jpg'

export function ImagesHeroSection() {
  return (
    <div className="flex flex-row items-center">
      <img
        src={peopleCollectingFoodImg}
        className="bg-slate-400/10 w-[50%] h-36 rounded-3xl -mr-44 z-10"
        alt=""
      />
      <img
        src={angleChildrenHoldingHandsImg}
        className="bg-slate-600 w-[95%] h-[520px] rounded-3xl ml-auto"
        alt=""
      />
    </div>
  )
}
