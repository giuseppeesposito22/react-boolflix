import { useProduction } from "../../contexts/ProductionContext";
import ProductionCard from "./ProductionCard";

export default function ProductionsList() {
  const { productions } = useProduction();

  return (
    <>
      <div className="row row-cols-6">
        {productions.map((production) => (
          <ProductionCard key={production.id} production={production} />
        ))}
      </div>
    </>
  );
}
