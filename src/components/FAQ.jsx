import faq from '../assets/FAQ.jpg'

export default function FAQ() {
  return (
<div>
    <h3 className='text-blue-900 text-center text-4xl font-bold mt-12 mb-8'>Some Frequently Asked Question</h3>
<div className='lg:flex items-center gap-6'>
    <div>
    <img className='rounded-xl' src={faq} alt="" />
    </div>
    <div className='mt-4 lg:mt-0'>
  <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">How do I use a coupon on your website?</div>
  <div className="collapse-content">
    <p>To use a coupon, simply browse through the available offers on our website. When you find a deal you like, click on it to get the coupon code or activate the deal. Copy the code and paste it into the promo code section during checkout on the retailer’s website.</p>
  </div>
</div>
  <div className="collapse collapse-arrow bg-base-200 mt-3">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium"> Are all the coupons free?</div>
  <div className="collapse-content">
    <p>Yes, all the coupons and discount codes listed on our website are completely free to use. You do not need to pay anything to access or apply the offers.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 mt-3">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium"> Can I use multiple coupons on the same order?</div>
  <div className="collapse-content">
    <p>Most retailers allow only one coupon code per order. However, some may allow stacking multiple discounts in certain cases, such as applying a coupon code along with a free shipping offer. Be sure to check the retailer’s terms before applying multiple codes.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 mt-3">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium"> How do I know if a coupon is valid?</div>
  <div className="collapse-content">
    <p>We strive to ensure all coupons listed on our website are valid and up-to-date. If a coupon is expired or invalid, we will remove it from the site. However, if you encounter an issue, please let us know so we can investigate.</p>
  </div>
</div>
    </div>

</div>
</div>
  )
}
