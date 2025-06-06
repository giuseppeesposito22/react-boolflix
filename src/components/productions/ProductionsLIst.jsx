import { useProduction } from "../../contexts/ProductionContext";
import ProductionCard from "./ProductionCard";

export default function ProductionsList() {
  const { productions } = useProduction();

  return (
    <>
      {productions.map((production) => (
        <ProductionCard key={production.id} production={production} />
      ))}
    </>
  );
}
