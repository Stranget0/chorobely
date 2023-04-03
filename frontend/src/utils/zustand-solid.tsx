import type mainPageStore from "../stores/mainPage/mainPage";
import { createEffect, createSignal } from "solid-js";

type Store = typeof mainPageStore;

type SelectorArgs<S extends Store> = Parameters<Parameters<S["subscribe"]>[0]>;
type Selector<S extends Store, V> = (state: SelectorArgs<S>[0]) => V;

export function solidStore<S extends Store,V = unknown>(store: S, selector: Selector<S, V>) {
  const [v, setV] = createSignal<V>();
  createEffect(() => {
    store.subscribe<V>(selector, setV);
  });
  return v;
}
