import { useState } from 'react';
import { ShoppingBag, Copy, Check, CheckCircle2, MapPin, Sparkles, Phone, Mail, Clock } from 'lucide-react';
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
  const [formError, setFormError] = useState<string>('');

  const [extraCondense, setExtraCondense] = useState<boolean>(true);
  const [bearBrandDust, setBearBrandDust] = useState<boolean>(true);
  const [miloDust, setMiloDust] = useState<boolean>(true);
  const [cinnamonSugar, setCinnamonSugar] = useState<boolean>(false);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>('');

  const totalAmount = packs * BUSINESS_INFO.pricePerPack;
  const totalSkewers = packs * BUSINESS_INFO.piecesPerPack;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !contactNumber.trim()) {
      setFormError('Please enter both your full name and contact number.');
      return;
    }
    setFormError('');

    const newOrderId = `OSQE-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(newOrderId);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#153e26', '#facc15', '#b91c1c', '#fef08a'],
      });
    } catch {
      // Confetti fallback
    }
  };

  const getOrderSummaryText = () => {
    const finalLocation = deliveryLocation === 'Other' ? customLocation : deliveryLocation;
    const toppings = [
      extraCondense ? 'Condensed Milk Glaze' : '',
      bearBrandDust ? 'Bear Brand Milk Powder' : '',
      miloDust ? 'Milo Chocolate Malt' : '',
      cinnamonSugar ? 'Cinnamon Sugar' : '',
    ]
      .filter(Boolean)
      .join(', ');

    return `*OSQE BANANA CHURROS PRE-ORDER*
Order Ref: ${orderId || 'PENDING'}
Customer: ${customerName}
Course/Dept: ${courseDept || 'N/A'}
Contact: ${contactNumber}
Quantity: ${packs} Pack(s) (${totalSkewers} skewers)
Total Payable: ₱${totalAmount}.00
Toppings: ${toppings || 'Standard Drizzle'}
Campus Spot: ${finalLocation}
Delivery Time: ${deliveryTime}
Notes: ${notes || 'None'}

Please prepare for ESSU campus merienda! Thank you!`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(getOrderSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#153e26] bg-[#153e26]/10 px-3 py-1 rounded-full mb-2">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Contact Us & Campus Pre-Order</span>
          </div>
          <h2 className="text-3xl font-extrabold font-heading text-stone-900 tracking-tight">
            Order Your Banana Churros
          </h2>
          <p className="mt-1 text-sm text-stone-600">
            Cooked fresh in batches for students, faculty, and staff at ESSU Borongan. 3 for ₱50 only.
          </p>
        </div>

        {/* Direct Contact Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-xs">
          <div className="p-3.5 rounded-xl bg-[#faf8f2] border border-stone-200/80 flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#153e26] shrink-0" />
            <div className="min-w-0">
              <span className="font-bold text-stone-900 block truncate">Call / SMS / GCash</span>
              <span className="text-stone-600 truncate block">{BUSINESS_INFO.contactPhone}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#faf8f2] border border-stone-200/80 flex items-center gap-3">
            <Mail className="w-4 h-4 text-[#153e26] shrink-0" />
            <div className="min-w-0">
              <span className="font-bold text-stone-900 block truncate">Official Email</span>
              <span className="text-stone-600 truncate block">{BUSINESS_INFO.contactEmail}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#faf8f2] border border-stone-200/80 flex items-center gap-3">
            <Clock className="w-4 h-4 text-[#153e26] shrink-0" />
            <div className="min-w-0">
              <span className="font-bold text-stone-900 block truncate">Operating Hours</span>
              <span className="text-stone-600 truncate block">{BUSINESS_INFO.orderHours}</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        {isSubmitted ? (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#faf7ee] border border-[#153e26]/20 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#153e26] text-[#facc15] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#153e26] uppercase tracking-wide block">
                  Order Successfully Queued
                </span>
                <h3 className="text-xl font-bold font-heading text-stone-900">
                  Thank you, {customerName}!
                </h3>
              </div>
            </div>

            {/* Receipt Summary */}
            <div className="p-4 rounded-xl bg-white border border-stone-200/80 space-y-2.5 text-xs">
              <div className="flex justify-between border-b border-stone-100 pb-1.5">
                <span className="text-stone-500">Reference ID:</span>
                <span className="font-mono font-bold text-stone-900">{orderId}</span>
              </div>
              <div className="flex justify-between border-b border-stone-100 pb-1.5">
                <span className="text-stone-500">Order Quantity:</span>
                <span className="font-semibold text-stone-900">{packs} Pack(s) ({totalSkewers} Skewers)</span>
              </div>
              <div className="flex justify-between border-b border-stone-100 pb-1.5">
                <span className="text-stone-500">Total Payable:</span>
                <span className="font-mono font-bold text-[#153e26] text-sm tabular-nums">₱{totalAmount}.00</span>
              </div>
              <div className="flex justify-between border-b border-stone-100 pb-1.5">
                <span className="text-stone-500">Handover Spot:</span>
                <span className="font-semibold text-stone-800">{deliveryLocation === 'Other' ? customLocation : deliveryLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Preferred Time:</span>
                <span className="font-semibold text-stone-800">{deliveryTime}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-2">
              <button
                onClick={handleCopySummary}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-[#153e26] hover:bg-[#0f2d1a] rounded-xl transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-[#facc15]" /> : <Copy className="w-4 h-4" />}
                <span>
                  {copied ? 'Copied to Clipboard! Ready to paste into Messenger' : 'Copy Order Text to Send via Messenger or SMS'}
                </span>
              </button>

              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full py-2 text-xs text-stone-600 hover:text-stone-900 underline text-center cursor-pointer block"
              >
                Place Another Pre-Order
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-[#faf7ee] border border-stone-200/80 space-y-6"
          >
            {formError && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                {formError}
              </div>
            )}

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-800 uppercase tracking-wide block">
                1. Select Quantity (₱50 / 3 Skewers)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[1, 2, 3, 4, 5, 6, 8, 10].map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setPacks(qty)}
                    className={`py-2 px-3 rounded-lg border text-xs transition-colors cursor-pointer text-center ${
                      packs === qty
                        ? 'bg-[#153e26] border-[#153e26] text-white font-bold shadow-2xs'
                        : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <span className="block font-heading font-bold">{qty} {qty === 1 ? 'Pack' : 'Packs'}</span>
                    <span className="block text-[10px] opacity-80">₱{qty * 50}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Toppings Preferences */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-800 uppercase tracking-wide block">
                2. Free Toppings & Drizzle
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <label className="p-2.5 rounded-lg bg-white border border-stone-200 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={extraCondense}
                      onChange={(e) => setExtraCondense(e.target.checked)}
                      className="accent-[#153e26]"
                    />
                    <span>Condensed Milk Glaze</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#153e26]">Standard</span>
                </label>

                <label className="p-2.5 rounded-lg bg-white border border-stone-200 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={bearBrandDust}
                      onChange={(e) => setBearBrandDust(e.target.checked)}
                      className="accent-[#153e26]"
                    />
                    <span>Bear Brand Milk Powder</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#153e26]">Free</span>
                </label>

                <label className="p-2.5 rounded-lg bg-white border border-stone-200 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={miloDust}
                      onChange={(e) => setMiloDust(e.target.checked)}
                      className="accent-[#153e26]"
                    />
                    <span>Milo Chocolate Malt</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#153e26]">Free</span>
                </label>

                <label className="p-2.5 rounded-lg bg-white border border-stone-200 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={cinnamonSugar}
                      onChange={(e) => setCinnamonSugar(e.target.checked)}
                      className="accent-[#153e26]"
                    />
                    <span>Cinnamon Sugar</span>
                  </div>
                  <span className="text-[10px] text-stone-400">Optional</span>
                </label>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-3 pt-1">
              <label className="text-xs font-bold text-stone-800 uppercase tracking-wide block">
                3. Customer & Campus Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-stone-600 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria Santos"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#153e26] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-stone-600 mb-1">Contact / GCash Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="0912 345 6789"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#153e26] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-stone-600 mb-1">Course & Year / Office</label>
                  <input
                    type="text"
                    placeholder="e.g. BSCS 2A"
                    value={courseDept}
                    onChange={(e) => setCourseDept(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#153e26] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-stone-600 mb-1">Preferred Merienda Time</label>
                  <select
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#153e26] bg-white"
                  >
                    <option>Morning Merienda (9:30 AM - 10:30 AM)</option>
                    <option>Lunch Break (11:45 AM - 1:00 PM)</option>
                    <option>Afternoon Merienda (2:30 PM - 3:30 PM)</option>
                    <option>Late Afternoon (4:30 PM - 5:30 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-stone-600 mb-1 text-xs">Handover Location on ESSU Campus</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {['ESSU Technology Building', 'Administration Quadrangle', 'Main Canteen', 'Main Gate', 'Other'].map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setDeliveryLocation(loc)}
                      className={`py-2 px-2.5 rounded-lg border text-left text-xs transition-colors cursor-pointer truncate ${
                        deliveryLocation === loc
                          ? 'bg-[#153e26]/10 border-[#153e26] text-[#153e26] font-bold'
                          : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>

                {deliveryLocation === 'Other' && (
                  <input
                    type="text"
                    placeholder="Specify exact room or location"
                    value={customLocation}
                    onChange={(e) => setCustomLocation(e.target.value)}
                    className="mt-2 w-full px-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#153e26] bg-white"
                  />
                )}
              </div>
            </div>

            {/* Total & Submit */}
            <div className="pt-3 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-stone-500 block">Total Due on Delivery:</span>
                <span className="text-2xl font-black font-heading text-[#153e26] font-mono tabular-nums">
                  ₱{totalAmount}.00{' '}
                  <span className="text-xs font-normal text-stone-600">({totalSkewers} skewers)</span>
                </span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-[#153e26] hover:bg-[#0f2d1a] rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Submit Pre-Order · ₱{totalAmount}.00
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}
