import { VodSchema } from "@/types/vod.schema";

export async function getVods() {
  // const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     query: `
  //       query Vods {
  //         vods {
  //           list
  //         }
  //       }
  //       `,
  //   }),
  //   next: { revalidate: 60 * 5 },
  // });
  // const json = await response.json();

  // return json.data.vods[0].list as VodSchema[];

  return [
    {
      day: "08/01",
      vods: {
        umildlive: ["2026767400?t=0h7m11s", "2026795017?t=0h0m0s"],
        scottonauta: ["2026865188?t=1h51m28s"],
      },
      server_day: 1,
    },
    {
      day: "09/01",
      vods: {},
      server_day: 2,
    },
    {
      day: "10/01",
      vods: {},
      server_day: 3,
    },
    {
      day: "11/01",
      vods: {
        dreasbro: ["2029515881?t=2h14m0s"],
      },
      server_day: 4,
    },
    {
      day: "12/01",
      vods: {
        bastet: ["2030733033?t=0h2m44s"],
        tiba041: ["2030713189?t=0h49m52s"],
        dreasbro: ["2030485462?t=2h53m18s"],
        umildlive: ["2030666447?t=1h19m55s"],
        scottonauta: ["2030564505?t=2h15m18s"],
      },
      server_day: 5,
    },
    {
      day: "13/01",
      vods: {
        bastet: ["2031709681?t=0h8m33s"],
      },
      server_day: 6,
    },
    {
      day: "14/01",
      vods: {
        bastet: ["2032198786?t=0h0m0s"],
        umildlive: ["2032220746?t=0h2m23s"],
        scottonauta: ["2032721479?t=1h25m35s"],
      },
      server_day: 7,
    },
    {
      day: "15/01",
      vods: {
        bastet: ["2033350169?t=2h40m21s"],
        imrafly: ["2033622002?t=0h0m0s"],
      },
      server_day: 8,
    },
    {
      day: "16/01",
      vods: {
        dreasbro: ["2034541355?t=2h18m36s"],
      },
      server_day: 9,
    },
    {
      day: "17/01",
      vods: {
        bastet: ["2035245390?t=0h20m6s"],
        dreasbro: ["2035506291?t=3h42m21s"],
        umildlive: ["2035876931?t=0h3m25s"],
        jinkiwinkki: ["2035760524?t=0h48m16s"],
        scottonauta: ["2035603775?t=2h12m49s"],
      },
      server_day: 10,
    },
    {
      day: "18/01",
      vods: {
        bastet: ["2036278722?t=0h46m42s"],
        tiba041: [
          "2036708802?t=0h24m26s",
          "2036870383?t=0h0m0s",
          "2036889516?t=0h0m0s",
        ],
        dreasbro: ["2036437717?t=2h41m37s"],
        umildlive: ["2036496011?t=0h10m20s"],
        jinkiwinkki: ["2036480293?t=0h14m5s", "2036783459?t=0h0m0s"],
        scottonauta: ["2036639457?t=0h42m23s"],
      },
      server_day: 11,
    },
    {
      day: "19/01",
      vods: {
        ljoga: ["2037704677?t=0h25m22s"],
        bastet: ["2037411290?t=0h21m38s"],
        jinkiwinkki: ["2037631261?t=0h13m47s"],
      },
      server_day: 12,
    },
    {
      day: "20/01",
      vods: {
        oflopi: ["2038763913?t=0h2m41s"],
        dreasbro: ["2038540029?t=3h16m1s"],
      },
      server_day: 13,
    },
    {
      day: "21/01",
      vods: {
        bastet: ["2039369088?t=6h21m3s"],
        kaaory: ["2039887255?t=0h15m2s"],
        dreasbro: ["2039593002?t=2h43m32s"],
      },
      server_day: 14,
    },
    {
      day: "22/01",
      vods: {
        oakinoo: ["2040712307?t=0h32m5s"],
        jinkiwinkki: ["2040843726?t=0h0m0s"],
        scottonauta: ["2040606492?t=1h10m33s"],
      },
      server_day: 15,
    },
    {
      day: "23/01",
      vods: {
        bastet: ["2041258153?t=0h15m47s"],
        dreasbro: ["2041460638?t=2h30m8s"],
        mynluvsx: ["2041529691?t=0h47m22s"],
      },
      server_day: 16,
    },
    {
      day: "24/01",
      vods: {
        bastet: ["2042232048?t=0h0m0s", "2042270677?t=0h0m0s"],
        ameizim: ["2042544942?t=0h5m3s"],
        oakinoo: ["2042538732?t=0h8m6s"],
        tiba041: ["2042665118?t=0h34m3s"],
        dreasbro: ["2042428978?t=2h13m44s"],
        umildlive: ["2042505014?t=0h9m19s"],
        jinkiwinkki: ["2042594692?t=0h9m16s"],
        scottonauta: ["2042587262?t=0h39m12s"],
      },
      server_day: 17,
    },
    {
      day: "25/01",
      vods: {
        ljoga: ["2043485427?t=1h21m59s"],
        bastet: ["2043435969?t=0h9m52s"],
        kaaory: ["2043544670?t=0h9m44s", "2043699395?t=0h4m51s"],
        oflopi: ["2043515985?t=0h3m34s"],
        ameizim: ["2043542401?t=0h5m1s", "2043553592?t=0h0m0s"],
        oakinoo: ["2043517376?t=0h5m23s"],
        dreasbro: ["2043403074?t=0h39m47s"],
        mynluvsx: ["2043504961?t=0h44m42s"],
        umildlive: ["2043504812?t=0h20m58s"],
        kellerzons: ["2043472959?t=1h3m49s"],
        jinkiwinkki: ["2043266260?t=0h0m0s", "2043490184?t=0h1m41s"],
        scottonauta: ["2043545479?t=0h6m49s"],
      },
      event: "O Julgamento",
      server_day: 18,
    },
    {
      day: "26/01",
      vods: {
        oakinoo: ["2044589318?t=2h10m20s"],
        scottonauta: ["2044493308?t=2h36m27s"],
      },
      server_day: 19,
    },
    {
      day: "27/01",
      vods: {
        ljoga: ["2045303196?t=0h52m31s"],
      },
      server_day: 20,
    },
    {
      day: "28/01",
      vods: {
        ljoga: ["2046740621?t=0h11m33s"],
        bastet: ["2046666489?t=0h0m0s"],
        oflopi: ["2046587414?t=0h11m5s"],
        fehdubs: ["2046724342?t=0h3m43s", "2046800840?t=0h0m0s"],
        imrafly: ["2046639652?t=0h0m0s"],
        oakinoo: ["2046618520?t=0h17m20s"],
        tiba041: ["2046655057?t=0h39m35s", "2046819606?t=0h0m0s"],
        dreasbro: ["2046472285?t=3h33m58s"],
        mynluvsx: ["2046635315?t=0h38m58s"],
        umildlive: ["2046573306?t=0h18m30s"],
        carrasquera: ["2046639334?t=0h3m3s"],
        jinkiwinkki: ["2046739315?t=0h0m0s"],
        scottonauta: ["2046649199?t=0h9m0s"],
      },
      event: "Episódio de Praia / A Fuga",
      server_day: 21,
    },
    {
      day: "29/01",
      vods: {
        bastet: ["2047228853?t=0h2m44s"],
        oakinoo: ["2047549630?t=0h13m8s"],
        umildlive: ["2047514951?t=0h5m16s"],
      },
      server_day: 22,
    },
    {
      day: "30/01",
      vods: {},
      server_day: 23,
    },
    {
      day: "31/01",
      vods: {
        bastet: ["2048954680?t=3h37m59s"],
        oakinoo: ["2049455244?t=0h36m18s"],
        dreasbro: ["2049233796?t=2h9m26s"],
        umildlive: ["2049326800?t=2h40m9s"],
        jinkiwinkki: ["2049457645?t=0h14m10s"],
      },
      server_day: 24,
    },
    {
      day: "01/02",
      vods: {
        kaaory: ["2050458404?t=0h18m51s"],
        fehdubs: ["2050395720?t=1h44m14s"],
        scottonauta: ["2050367619?t=1h49m32s"],
      },
      server_day: 25,
    },
    {
      day: "02/02",
      vods: {
        bastet: ["2050985059?t=0h15m51s"],
        kojjlul: ["2051319173?t=0h0m0s"],
        oakinoo: ["2051385650?t=0h27m37s"],
        tiba041: ["2051426024?t=0h15m20s"],
        umildlive: ["2051246693?t=0h5m47s", "2051292808?t=0h0m0s"],
      },
      server_day: 26,
    },
    {
      day: "03/02",
      vods: {
        ljoga: ["2052069886?t=0h18m37s"],
        oflopi: ["2052095272?t=0h3m12s"],
        fehdubs: ["2052550153?t=0h40m39s"],
        imrafly: [
          "2052296993?t=0h8m47s",
          "2052311285?t=0h4m54s",
          "2052374842?t=0h5m51s",
        ],
        kojjlul: ["2052357232?t=0h0m0s"],
        scottonauta: ["2052549201?t=0h16m31s"],
      },
      server_day: 27,
    },
    {
      day: "04/02",
      vods: {
        kojjlul: ["2053542557?t=0h0m0s"],
      },
      server_day: 28,
    },
    {
      day: "05/02",
      vods: {
        fehdubs: ["2054584738?t=0h28m13s"],
        imrafly: ["2054172659?t=0h6m17s", "2054199782?t=0h4m45s"],
        oakinoo: ["2054395033?t=2h1m31s"],
        umildlive: ["2054409422?t=3h13m1s"],
        carrasquera: ["2054072778?t=2h59m14s"],
      },
      server_day: 29,
    },
    {
      day: "06/02",
      vods: {
        bastet: ["2054970020?t=0h44m22s", "2055153319?t=0h0m0s"],
        imrafly: ["2055346821?t=0h0m0s"],
      },
      server_day: 30,
    },
    {
      day: "07/02",
      vods: {
        oflopi: ["2056237638?t=0h1m23s"],
        ameizim: ["2056264338?t=0h4m2s"],
      },
      server_day: 31,
    },
    {
      day: "08/02",
      vods: {
        ljoga: ["2056864254?t=1h43m37s"],
        kaaory: ["2056684380?t=0h10m25s"],
        oakinoo: ["2057209233?t=0h57m5s"],
      },
      server_day: 32,
    },
    {
      day: "09/02",
      vods: {
        bastet: ["2058021683?t=0h14m38s"],
        kaaory: ["2058312542?t=0h8m37s"],
        ameizim: ["2058338821?t=0h3m43s"],
        kojjlul: ["2058185234?t=0h0m0s"],
        oakinoo: ["2058171389?t=1h9m12s"],
        jinkiwinkki: ["2058242939?t=0h9m41s"],
      },
      server_day: 33,
    },
    {
      day: "10/02",
      vods: {
        bastet: ["2058619111?t=0h6m0s"],
        oflopi: ["2059321390?t=0h4m2s"],
        dreasbro: ["2059015223?t=1h50m2s"],
        scottonauta: ["2058999405?t=1h49m54s"],
      },
      server_day: 34,
    },
    {
      day: "11/02",
      vods: {
        bastet: ["2060160536?t=0h0m0s"],
        kaaory: ["2060304874?t=0h11m50s"],
      },
      server_day: 35,
    },
  ] as VodSchema[];
}
