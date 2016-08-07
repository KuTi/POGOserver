import proto from "../proto";

/**
 * @return {Object}
 */
export default function AuthTicket() {

  return (
    new proto.Networking.Envelopes.AuthTicket({
      start: new Buffer(""),
      expire_timestamp_ms: 9999999999999,
      end: new Buffer("")
    })
  );

}