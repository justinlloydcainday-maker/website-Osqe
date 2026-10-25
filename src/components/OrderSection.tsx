import { useState } from 'react';
import { ShoppingBag, Copy, Check, CheckCircle2, MessageSquare, MapPin, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/businessData';

export default function OrderSection() {
  const [packs, setPacks] = useState<number>(1);
  const [customerName, setCustomerName] = useState<string>('');
  const [courseDept, setCourseDept] = useState<string>('');
  const [contactNumber, setContactNumber] = useState<string>('');
  const [deliveryLocation, setDeliveryLocation] = useState<string>('ESSU Technology Building');
  const [customLocation, setCustomLocation] = useState<string>('');
  const [deliveryTime, setDeliveryTime] = useState<string>('Morning Merienda (9:30 AM - 10:30 AM)');
  const [notes, setNotes] = useState<string>('');

  // Topping selections
  const [extraCondense, setExtraCondense] = useState<boolean>(true);
  const [bearBrandDust, setBearBrandDust] = useState<boolean>(true);
  const [miloDust, setMiloDust] = useState<boolean>(true);
  const [cinnamonSugar, setCinnamonSugar] = useState<boolean>(false);

  // Submission state
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>('');

  const totalAmount = packs * BUSINESS_INFO.pricePerPack;
  const totalSkewers = packs * BUSINESS_INFO.piecesPerPack;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !contactNumber) {
      alert('Please provide your name and contact number for campus delivery.');
      return;
    }

    const newOrderId = `OSQE-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(newOrderId);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#f59e0b', '#fbbf24', '#fef3c7', '#10b981'],
      });
    } catch {
      // Fallback if canvas-confetti is unavailable
    }
  };

  const getOrderSummaryText = () => {
    const finalLocation = deliveryLocation === 'Other' ? customLocation : deliveryLocation;
    const toppings = [
      extraCondense ? 'Extra Condensed Milk' : '',
      bearBrandDust ? 'Bear Brand Milk Powder' : '',
      miloDust ? 'Milo Chocolate Malt' : '',
      cinnamonSugar ? 'Cinnamon Sugar' : '',
    ]
      .filter(Boolean)
      .join(', ');

    return `*OSQE BANANA CHURROS PRE-ORDER*
Order Ref: ${orderId || 'PENDING'}
Customer: ${customerName}
Course / Dept: ${courseDept || 'N/A'}
Contact: ${contactNumber}
Quantity: ${packs} Pack(s) (${totalSkewers} skewers)
Total: ₱${totalAmount}.00
Toppings: ${toppings || 'Standard Drizzle'}
Delivery Spot: ${finalLocation}
Delivery Time: ${deliveryTime}
Special Notes: ${notes || 'None'}

Please confirm my order for ESSU campus delivery! Thank you!`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(getOrderSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="order" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Campus Merienda Pre-Order</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-stone-900 tracking-tight">
            Order Warm Banana Churros
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Freshly cooked in batches for ESSU Main Campus students, faculty, and staff. Only ₱50 for 3 delicious spiral skewers!
          </p>
        </div>

        {/* Order Form or Receipt */}
        {isSubmitted ? (
          <div className="p-8 sm:p-10 rounded-3xl bg-amber-50/70 border border-amber-200 shadow-md text-stone-900 animate-in fade-in duration-300">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-center space-y-2 mb-8">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                Pre-Order Recorded
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-stone-900">
                Thank You, {customerName}!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                Your order is queued for the next campus batch. Order Reference:{' '}
                <strong className="text-stone-900 font-mono text-sm">{orderId}</strong>
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-3 text-xs mb-6">
              <div className="flex justify-between border-b border-stone-100 pb-2">
                <span className="text-stone-500">Order Items:</span>
                <span className="font-bold text-stone-900">
                  {packs} Pack(s) ({totalSkewers} Skewers)
                </span>
              </div>
              <div className="flex justify-between border-b border-stone-100 pb-2">
                <span className="text-stone-500">Total Payable:</span>
                <span className="font-mono font-black text-amber-800 text-base tabular-nums">
                  ₱{totalAmount}.00
                </span>
              </div>
              <div className="flex justify-between border-b border-stone-100 pb-2">
                <span className="text-stone-500">Delivery Location:</span>
                <span className="font-semibold text-stone-800 text-right">
                  {deliveryLocation === 'Other' ? customLocation : deliveryLocation}
                </span>
              </div>
              <div className="flex justify-between border-b border-stone-100 pb-2">
                <span className="text-stone-500">Preferred Time:</span>
                <span className="font-semibold text-stone-800">{deliveryTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Payment Method:</span>
                <span className="font-semibold text-stone-800">Cash on Delivery / G-Cash on Handover</span>
              </div>
            </div>

            {/* Fast Messenger / SMS Copy Button */}
            <div className="space-y-3">
              <button
                onClick={handleCopySummary}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors cursor-pointer shadow-sm"
              >
                {copied ? <Check className="w-4 h-4 text-stone-950" /> : <Copy className="w-4 h-4" />}
                <span>
                  {copied
                    ? 'Copied to Clipboard! Ready to paste into Messenger/SMS'
                    : 'Copy Order Text to send via Messenger / SMS to Justin or Oscar'}
                </span>
              </button>

              <div className="text-center text-[11px] text-stone-500 pt-2">
                Campus Coordinators: Justin Lloyd Cainday ({BUSINESS_INFO.contactPhone})
              </div>

              <div className="text-center pt-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-semibold text-amber-800 hover:text-amber-900 underline cursor-pointer"
                >
                  Place Another Pre-Order
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 rounded-3xl bg-stone-50/70 border border-stone-200 shadow-sm space-y-8"
          >
            {/* Step 1: Pack Selection */}
            <div className="space-y-4">
              <label className="text-sm font-bold font-heading text-stone-900 block">
                1. Select Quantity of Packs (₱50 / 3 Skewers each)
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[1, 2, 3, 4, 5, 6, 8, 10].map((qty) => (
                  <button
                    type="button"
                    key={qty}
                    onClick={() => setPacks(qty)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      packs === qty
                        ? 'bg-amber-400 border-amber-500 text-stone-950 font-bold shadow-xs'
                        : 'bg-white border-stone-200 hover:border-amber-300 text-stone-800'
                    }`}
                  >
                    <span className="block text-sm font-bold font-heading">{qty} {qty === 1 ? 'Pack' : 'Packs'}</span>
                    <span className="block text-[11px] text-stone-500 mt-0.5">
                      {qty * 3} skewers · ₱{qty * 50}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Custom Toppings & Drizzle */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold font-heading text-stone-900 block">
                  2. Customize Drizzle & Sweet Dusting (All Included Free)
                </label>
                <span className="text-[11px] text-emerald-700 font-semibold">Free Customization</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-center justify-between cursor-pointer hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={extraCondense}
                      onChange={(e) => setExtraCondense(e.target.checked)}
                      className="accent-amber-500 rounded"
                    />
                    <span className="text-xs font-semibold text-stone-800">Condensed Milk Glaze</span>
                  </div>
                  <span className="text-[11px] text-amber-700 font-bold">Standard</span>
                </label>

                <label className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-center justify-between cursor-pointer hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={bearBrandDust}
                      onChange={(e) => setBearBrandDust(e.target.checked)}
                      className="accent-amber-500 rounded"
                    />
                    <span className="text-xs font-semibold text-stone-800">Bear Brand Milk Powder</span>
                  </div>
                  <span className="text-[11px] text-amber-700 font-bold">Popular</span>
                </label>

                <label className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-center justify-between cursor-pointer hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={miloDust}
                      onChange={(e) => setMiloDust(e.target.checked)}
                      className="accent-amber-500 rounded"
                    />
                    <span className="text-xs font-semibold text-stone-800">Milo Chocolate Malt</span>
                  </div>
                  <span className="text-[11px] text-amber-700 font-bold">Popular</span>
                </label>

                <label className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-center justify-between cursor-pointer hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={cinnamonSugar}
                      onChange={(e) => setCinnamonSugar(e.target.checked)}
                      className="accent-amber-500 rounded"
                    />
                    <span className="text-xs font-semibold text-stone-800">Cinnamon Sugar Dusting</span>
                  </div>
                  <span className="text-[11px] text-stone-400 font-medium">Optional</span>
                </label>
              </div>
            </div>

            {/* Step 3: Customer Details */}
            <div className="space-y-4 pt-2">
              <label className="text-sm font-bold font-heading text-stone-900 block">
                3. Customer & Campus Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria Santos"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Mobile Phone / GCash Contact *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0912 345 6789"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Course & Year / Department
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. BSCS 2nd Year, Admin Staff"
                    value={courseDept}
                    onChange={(e) => setCourseDept(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Preferred Merienda Delivery Time
                  </label>
                  <select
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none bg-white"
                  >
                    <option>Morning Merienda (9:30 AM - 10:30 AM)</option>
                    <option>Lunch Break (11:45 AM - 1:00 PM)</option>
                    <option>Afternoon Merienda (2:30 PM - 3:30 PM)</option>
                    <option>Late Afternoon Dismissal (4:30 PM - 5:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Delivery Spot Selection */}
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  ESSU Main Campus Handover Location
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'ESSU Technology Building / Lab',
                    'ESSU Administration Quadrangle',
                    'ESSU Main Canteen / Gazebo',
                    'Main Gate / Motorcycle Parking',
                    'Other',
                  ].map((loc) => (
                    <button
                      type="button"
                      key={loc}
                      onClick={() => setDeliveryLocation(loc)}
                      className={`p-2.5 text-left rounded-xl border transition-colors cursor-pointer flex items-center gap-2 ${
                        deliveryLocation === loc
                          ? 'bg-amber-100 border-amber-400 text-stone-900 font-semibold'
                          : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span className="truncate">{loc}</span>
                    </button>
                  ))}
                </div>

                {deliveryLocation === 'Other' && (
                  <input
                    type="text"
                    placeholder="Specify exact building, room number, or classroom"
                    value={customLocation}
                    onChange={(e) => setCustomLocation(e.target.value)}
                    className="mt-2 w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none bg-white"
                  />
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Special Notes or Allergen Preferences (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Less sweet, extra chocolate powder, deliver to Room 204"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none bg-white"
                />
              </div>
            </div>

            {/* Step 4: Total & Submit */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-stone-500 block">Total Due upon Delivery:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black font-heading text-amber-800 font-mono tabular-nums">
                    ₱{totalAmount}.00
                  </span>
                  <span className="text-xs text-stone-600 font-medium">
                    ({packs} pack{packs > 1 ? 's' : ''} · {totalSkewers} skewers)
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-sm transition-all hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Submit Campus Pre-Order</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}
