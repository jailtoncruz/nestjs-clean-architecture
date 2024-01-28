import { Equipment, EquipmentType, Location } from "@prisma/client";
import { randomUUID } from "crypto";
import { readFileSync } from "fs";
import { resolve } from "path";

interface EquipmentSeed {
  name: string;
  description: string;
  type: EquipmentType;
}

export function generateEquipments(locations: Location[]): Equipment[] {
  const file = resolve(process.cwd(), "data", "local", "equipments.json");
  const data = readFileSync(file).toString();
  const equipments: EquipmentSeed[] = JSON.parse(data);

  return equipments.map((e) => {
    const randomLocationIndex = Math.floor(Math.random() * locations.length);
    const location = locations[randomLocationIndex];
    return {
      ...e,
      id: randomUUID(),
      location_id: location.id,
      status: "Available",
    } as Equipment;
  });
}
