import { PrismaClient } from '@prisma/client';
import { generateEquipments } from './create-equipments';
import { generateLocations } from './create-locationts';

export const prismaSeed = new PrismaClient();

async function main() {
  const locations = await generateLocations();
  console.log(`[${locations.length}] locations created by seeding.`);

  const equipments = await prismaSeed.equipment.createMany({
    data: generateEquipments(locations),
  });

  console.log(`[${equipments.count}] equipments created by seeding.`);
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prismaSeed.$disconnect());
