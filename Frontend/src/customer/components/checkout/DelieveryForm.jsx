function DelieveryForm() {
  return (
    <div class="max-w-2xl mx-auto p-8 bg-white">
      <form class="space-y-8">
        <div>
          <h2 class="text-lg font-medium text-gray-900">Contact information</h2>
          <div class="mt-4">
            <label
              htmlFor="email"
              class="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border p-2"
            />
          </div>
        </div>

        <hr class="border-gray-200" />

        <div class="space-y-4">
          <h2 class="text-lg font-medium text-gray-900">
            Shipping information
          </h2>

          <div class="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                class="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                id="first-name"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border p-2"
              />
            </div>

            <div>
              <label
                htmlFor="last-name"
                class="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                id="last-name"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border p-2"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                htmlFor="address"
                class="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border p-2"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                htmlFor="apartment"
                class="block text-sm font-medium text-gray-700"
              >
                Apartment, suite, etc.
              </label>
              <input
                type="text"
                id="apartment"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border p-2"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                class="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border p-2"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                class="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <select
                id="country"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border p-2 bg-white"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>India</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="state"
                class="block text-sm font-medium text-gray-700"
              >
                State / Province
              </label>
              <input
                type="text"
                id="state"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border p-2"
              />
            </div>

            <div>
              <label
                htmlFor="postal-code"
                class="block text-sm font-medium text-gray-700"
              >
                Postal code
              </label>
              <input
                type="text"
                id="postal-code"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border p-2"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                htmlFor="phone"
                class="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border p-2"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DelieveryForm;
