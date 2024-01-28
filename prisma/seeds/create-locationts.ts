import { resolve } from "path";
import { readFileSync } from "fs";
import { prismaSeed } from ".";
import { randomUUID } from "crypto";

interface LocationSeed {
  name: string;
  description: string;
  address: string;
}

export async function generateLocations() {
  const file = resolve(process.cwd(), "data", "local", "locations.json");
  const data = readFileSync(file).toString();
  const locations_seed: LocationSeed[] = JSON.parse(data);

  const locations = locations_seed.map((l) => {
    return { ...l, id: randomUUID() };
  });

  await prismaSeed.location.createMany({
    data: locations,
  });

  return locations;
}
