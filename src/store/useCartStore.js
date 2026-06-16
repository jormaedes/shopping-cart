import { create } from "zustand";

const useCartStore = create((set, get) => ({
	items: [],

	addItem: (product) => {
		const items = get().items;
		const existing = items.find((i) => i.id === product.id);

		if (existing) {
			set({
				items: items.map((i) =>
					i.id === product.id ? { ...i, quantity: i.quantity + product.quantity } : i
				)
			});
		} else {
			set({
				items: [...items, { ...product, quantity:  product.quantity}]
			})
		}
	},

	removeItem: (id) => {
		set((state) => ({
			items: state.items.filter((i) => i.id != id)
		}))
	},

	clearCart: () => set({ items: [] }),

	getTotalItems: () => get().items.reduce((acc, i) => acc + i.quantity, 0),

	getTotalPrice: () => get().items.reduce((acc, i) => acc + i.price * i.quantity, 0)
}));

export default useCartStore;