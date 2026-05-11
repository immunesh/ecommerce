import { useState, useMemo } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import { XMarkIcon } from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";

import { mens_kurta } from "../../../Data/mens_kurta";
import { women_kurta } from "../../../Data/women_kurta";
import ProductCard from "./ProductCard";
import { filters } from "./FilterData";
import { useLocation } from "react-router-dom";

const sortOptions = [
  { name: "Most Popular" },
  { name: "Best Rating" },
  { name: "Newest" },
  { name: "Price: Low to High" },
  { name: "Price: High to Low" },
];

const Product = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const location = useLocation();

  const gender = location.pathname.search("/women") == -1 ? "men" : "women";

  console.log(gender);

  const [filtersState, setFiltersState] = useState({
    color: [],
    size: [],
    price: [],
    discount: [],
    stock: [],
  });

  const handleFilterChange = (sectionId, value) => {
    setFiltersState((prev) => {
      const alreadySelected = prev[sectionId].includes(value);

      return {
        ...prev,
        [sectionId]: alreadySelected
          ? prev[sectionId].filter((item) => item !== value)
          : [...prev[sectionId], value],
      };
    });
  };

  const data = gender === "men" ? mens_kurta : women_kurta;
  const filteredProducts = useMemo(() => {
    return data.filter((product) => {
      // COLOR
      if (
        filtersState.color.length &&
        !filtersState.color.includes(product.color?.toLowerCase())
      ) {
        return false;
      }

      // SIZE
      if (
        filtersState.size.length &&
        !filtersState.size.includes(product.size)
      ) {
        return false;
      }

      // PRICE
      if (filtersState.price.length) {
        const matchPrice = filtersState.price.some((range) => {
          const [min, max] = range.split("-").map(Number);

          return (
            product.discountedPrice >= min && product.discountedPrice <= max
          );
        });

        if (!matchPrice) return false;
      }

      // DISCOUNT
      if (filtersState.discount.length) {
        const matchDiscount = filtersState.discount.some(
          (discount) => product.discountPersent >= Number(discount),
        );

        if (!matchDiscount) return false;
      }

      // STOCK
      if (filtersState.stock.length) {
        if (filtersState.stock.includes("in_stock") && !product.inStock) {
          return false;
        }

        if (filtersState.stock.includes("out_of_stock") && product.inStock) {
          return false;
        }
      }

      return true;
    });
  }, [filtersState]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* MOBILE FILTER */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="ml-auto h-full w-full max-w-sm overflow-y-auto bg-white shadow-2xl p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Filters</h2>

              <button onClick={() => setMobileFiltersOpen(false)}>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <form className="mt-8">
              {filters.map((section) => (
                <Disclosure
                  key={section.id}
                  as="div"
                  className="border-b border-gray-200 py-5"
                >
                  <DisclosureButton className="flex w-full items-center justify-between">
                    <span className="font-semibold text-gray-900">
                      {section.name}
                    </span>

                    <span>
                      <PlusIcon className="h-5 w-5 group-data-[open]:hidden" />
                      <MinusIcon className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                    </span>
                  </DisclosureButton>

                  <DisclosurePanel className="pt-5">
                    <div className="space-y-4">
                      {section.options.map((option, idx) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filtersState[section.id].includes(
                              option.value,
                            )}
                            onChange={() =>
                              handleFilterChange(section.id, option.value)
                            }
                            className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                          />

                          <label className="ml-3 text-sm text-gray-600">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-5 pt-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            New Arrivals
          </h1>

          <div className="flex items-center gap-4">
            {/* SORT */}
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-black">
                Sort
                <ChevronDownIcon className="ml-1 h-5 w-5" />
              </MenuButton>

              <MenuItems className="absolute right-0 z-10 mt-2 w-48 rounded-xl bg-white shadow-xl border border-gray-100">
                <div className="py-2">
                  {sortOptions.map((option) => (
                    <MenuItem key={option.name}>
                      <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                        {option.name}
                      </button>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden"
            >
              <FunnelIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <section className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* SIDEBAR */}
            <form className="hidden lg:block bg-white rounded-2xl border border-gray-200 p-5 h-fit sticky top-24 shadow-sm">
              {filters.map((section) => (
                <Disclosure
                  key={section.id}
                  as="div"
                  className="border-b border-gray-200 py-5"
                >
                  <DisclosureButton className="flex w-full items-center justify-between">
                    <span className="font-semibold text-gray-900">
                      {section.name}
                    </span>

                    <span>
                      <PlusIcon className="h-5 w-5 group-data-[open]:hidden" />
                      <MinusIcon className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                    </span>
                  </DisclosureButton>

                  <DisclosurePanel className="pt-5">
                    <div className="space-y-4">
                      {section.options.map((option) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filtersState[section.id].includes(
                              option.value,
                            )}
                            onChange={() =>
                              handleFilterChange(section.id, option.value)
                            }
                            className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                          />

                          <label className="ml-3 text-sm text-gray-600">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>

            {/* PRODUCTS */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.length === 0 && (
                  <div className="col-span-full flex flex-col items-center justify-center py-20">
                    <h2 className="text-2xl font-semibold text-gray-800">
                      No Products Found
                    </h2>

                    <p className="mt-2 text-gray-500">
                      Try changing your filters
                    </p>
                  </div>
                )}

                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Product;
