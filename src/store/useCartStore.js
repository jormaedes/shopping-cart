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

	updateItem(id, flag) {
		const items =  get().items;
		const existing = items.find((i) => i.id === id);
		if (flag < 0 && existing.quantity == 1)
		{
			get().removeItem(id);
			return ;
		}
		set({
			items: items.map((i)=>
				i.id === id? {...i, quantity: i.quantity + flag} : i
			)
		})
	},

	incrementProduct(id, qtd) {
		const items = get().items;
		set({
			items: items.map((i)=>
				id === i.id? {...i, quantity: qtd} : i
			)
		})
	},

	clearCart: () => set({ items: [] }),

	getTotalItems: () => get().items.reduce((acc, i) => acc + i.quantity, 0),

	getTotalPrice: () => get().items.reduce((acc, i) => acc + i.price * i.quantity, 0)
}));

export default useCartStore;