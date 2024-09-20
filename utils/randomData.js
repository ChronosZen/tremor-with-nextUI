export default function randomData(startDate, days, assets) {
  const data = [];
  let currentDate = new Date(startDate);

  for (let i = 0; i < days; i++) {
    assets.forEach((asset) => {
      const priceChange = (Math.random() - 0.5) * asset.price * 0.12;
      const volumeChange = (Math.random() - 0.5) * asset.volume * 0.1;
      const newData = {
        date: currentDate.toISOString().slice(0, 10),
        assetName: asset.name,
        price: Math.round(asset.price + priceChange),
        volume: Math.round(asset.volume + volumeChange),
      };
      data.push(newData);
      asset.price += priceChange; // Update price for next day
      asset.volume += volumeChange; // Update volume for next day
    });
    currentDate.setDate(currentDate.getDate() + 1); // Increment date
  }

  return data;
}
