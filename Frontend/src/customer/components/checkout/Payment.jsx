function Payment() {
  return (
    <>
      <div class="max-w-xl mx-auto p-6 bg-white">
        <h2 class="text-lg font-medium text-gray-900 mb-6">Payment</h2>

        <div class="flex items-center space-x-6 mb-8">
          <label class="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              checked
            />
            <span class="text-sm font-medium text-gray-700">Credit card</span>
          </label>
          <label class="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <span class="text-sm font-medium text-gray-700">PayPal</span>
          </label>
          <label class="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <span class="text-sm font-medium text-gray-700">eTransfer</span>
          </label>
        </div>

        <form class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Card number
            </label>
            <input
              type="text"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Name on card
            </label>
            <input
              type="text"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div class="grid grid-cols-3 gap-x-4">
            <div class="col-span-2">
              <label class="block text-sm font-medium text-gray-700">
                Expiration date (MM/YY)
              </label>
              <input
                type="text"
                placeholder="MM / YY"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">CVC</label>
              <input
                type="text"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Payment;
