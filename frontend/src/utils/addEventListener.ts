export default function appAddEventListener<
  E extends Element | Window | Document,
  T extends Parameters<E["addEventListener"]>[0]
>(element: E, type: T, listener: (this: E, ev: EventSourceEventMap[T]) => any) {
  element.addEventListener(type, listener);
  return () => element.removeEventListener(type, listener);
}
