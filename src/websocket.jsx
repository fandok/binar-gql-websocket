import { useEffect, useState } from "react";

const apiCall = {
  event: "bts:subscribe",
  data: { channel: "order_book_btcusd" },
};

const WebsocketPage = () => {
  const [bids, setBids] = useState([0]);

  useEffect(() => {
    const websocket = new WebSocket("wss://ws.bitstamp.net");
    websocket.onopen = () => {
      websocket.send(JSON.stringify(apiCall));
    };

    websocket.onmessage = (event) => {
      const json = JSON.parse(event.data);

      try {
        if (json.event === "data") {
          setBids(json.data.bids.slice(0, 5));
        }
      } catch (err) {
        console.log(err);
      }
    };
  }, []);

  const firstBids = bids.map((item, index) => (
    <div key={index}>
      <p>{item}</p>
    </div>
  ));

  return <div>{firstBids}</div>;
};

export default WebsocketPage;
