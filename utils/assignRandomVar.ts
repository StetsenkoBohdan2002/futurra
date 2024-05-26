export enum OfferPageVariant {
  Variant1 = 'var1',
  Variant2 = 'var2',
}
export default function (): OfferPageVariant {
  const randomNumber: number = Math.random();
  return randomNumber < 0.5 ? OfferPageVariant.Variant1 : OfferPageVariant.Variant2;
}
