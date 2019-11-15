json.set! :users do
    json.( @user, :id, :last_name, :email)
end

json.set! :wallets do
    Watchlist.find_by(user_id: @user.id).coins.each do |coin|
        json.set! coin.name do
            json.( coin, :id, :name)
        end
    end    
end

# res = Assets.new
res = [
        {
            "id": 1,
            "name": "Bitcoin",
            "symbol": "BTC",
            "slug": "bitcoin",
            "num_market_pairs": 7769,
            "date_added": "2013-04-28T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 21000000,
            "circulating_supply": 18041512,
            "total_supply": 18041512,
            "platform": null,
            "cmc_rank": 1,
            "last_updated": "2019-11-11T16:34:37.000Z",
            "quote": {
                "USD": {
                    "price": 8756.97046995,
                    "volume_24h": 21514442437.4495,
                    "percent_change_1h": 0.054895,
                    "percent_change_24h": -2.14601,
                    "percent_change_7d": -5.96887,
                    "market_cap": 157988987817.24857,
                    "last_updated": "2019-11-11T16:34:37.000Z"
                }
            }
        },
        {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "num_market_pairs": 5391,
            "date_added": "2015-08-07T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": null,
            "circulating_supply": 108513017.9365,
            "total_supply": 108513017.9365,
            "platform": null,
            "cmc_rank": 2,
            "last_updated": "2019-11-11T16:34:26.000Z",
            "quote": {
                "USD": {
                    "price": 186.54754789,
                    "volume_24h": 8146091814.0396,
                    "percent_change_1h": -0.262994,
                    "percent_change_24h": -1.31381,
                    "percent_change_7d": 0.310974,
                    "market_cap": 20242837410.197662,
                    "last_updated": "2019-11-11T16:34:26.000Z"
                }
            }
        },
        {
            "id": 52,
            "name": "XRP",
            "symbol": "XRP",
            "slug": "ripple",
            "num_market_pairs": 508,
            "date_added": "2013-08-04T00:00:00.000Z",
            "tags": [],
            "max_supply": 100000000000,
            "circulating_supply": 43298481757,
            "total_supply": 99991298961,
            "platform": null,
            "cmc_rank": 3,
            "last_updated": "2019-11-11T16:35:04.000Z",
            "quote": {
                "USD": {
                    "price": 0.273926421687,
                    "volume_24h": 1484637569.50705,
                    "percent_change_1h": -0.327552,
                    "percent_change_24h": -2.43543,
                    "percent_change_7d": -7.05579,
                    "market_cap": 11860598172.174858,
                    "last_updated": "2019-11-11T16:35:04.000Z"
                }
            }
        },
        {
            "id": 1831,
            "name": "Bitcoin Cash",
            "symbol": "BCH",
            "slug": "bitcoin-cash",
            "num_market_pairs": 440,
            "date_added": "2017-07-23T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 21000000,
            "circulating_supply": 18107450,
            "total_supply": 18107450,
            "platform": null,
            "cmc_rank": 4,
            "last_updated": "2019-11-11T16:35:06.000Z",
            "quote": {
                "USD": {
                    "price": 289.382251682,
                    "volume_24h": 2005107425.60214,
                    "percent_change_1h": 0.0799284,
                    "percent_change_24h": -0.20781,
                    "percent_change_7d": -0.501938,
                    "market_cap": 5239974653.219231,
                    "last_updated": "2019-11-11T16:35:06.000Z"
                }
            }
        },
        {
            "id": 825,
            "name": "Tether",
            "symbol": "USDT",
            "slug": "tether",
            "num_market_pairs": 3842,
            "date_added": "2015-02-25T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 4108044456.1,
            "total_supply": 4207771504.46,
            "platform": {
                "id": 83,
                "name": "Omni",
                "symbol": "OMNI",
                "slug": "omni",
                "token_address": "31"
            },
            "cmc_rank": 5,
            "last_updated": "2019-11-11T16:35:23.000Z",
            "quote": {
                "USD": {
                    "price": 1.00220927447,
                    "volume_24h": 25226127040.434,
                    "percent_change_1h": -0.0385883,
                    "percent_change_24h": 0.0314618,
                    "percent_change_7d": 0.00136912,
                    "market_cap": 4117120253.8384867,
                    "last_updated": "2019-11-11T16:35:23.000Z"
                }
            }
        },
        {
            "id": 2,
            "name": "Litecoin",
            "symbol": "LTC",
            "slug": "litecoin",
            "num_market_pairs": 559,
            "date_added": "2013-04-28T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 84000000,
            "circulating_supply": 63656845.7674216,
            "total_supply": 63656845.7674216,
            "platform": null,
            "cmc_rank": 6,
            "last_updated": "2019-11-11T16:35:05.000Z",
            "quote": {
                "USD": {
                    "price": 62.2771082953,
                    "volume_24h": 3265927698.95853,
                    "percent_change_1h": -0.00396255,
                    "percent_change_24h": -2.18747,
                    "percent_change_7d": 1.69016,
                    "market_cap": 3964364277.594925,
                    "last_updated": "2019-11-11T16:35:05.000Z"
                }
            }
        },
        {
            "id": 1765,
            "name": "EOS",
            "symbol": "EOS",
            "slug": "eos",
            "num_market_pairs": 395,
            "date_added": "2017-07-01T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 939730623.9244,
            "total_supply": 1036430635.3937,
            "platform": null,
            "cmc_rank": 7,
            "last_updated": "2019-11-11T16:35:06.000Z",
            "quote": {
                "USD": {
                    "price": 3.47171925633,
                    "volume_24h": 2153880588.61402,
                    "percent_change_1h": -0.280284,
                    "percent_change_24h": -2.67398,
                    "percent_change_7d": 1.38063,
                    "market_cap": 3262480902.841345,
                    "last_updated": "2019-11-11T16:35:06.000Z"
                }
            }
        },
        {
            "id": 1839,
            "name": "Binance Coin",
            "symbol": "BNB",
            "slug": "binance-coin",
            "num_market_pairs": 283,
            "date_added": "2017-07-25T00:00:00.000Z",
            "tags": [],
            "max_supply": 187536713,
            "circulating_supply": 155536713,
            "total_supply": 187536713,
            "platform": null,
            "cmc_rank": 8,
            "last_updated": "2019-11-11T16:35:06.000Z",
            "quote": {
                "USD": {
                    "price": 20.1630115379,
                    "volume_24h": 212233802.094353,
                    "percent_change_1h": -0.164202,
                    "percent_change_24h": -0.702994,
                    "percent_change_7d": -2.00634,
                    "market_cap": 3136088538.7860413,
                    "last_updated": "2019-11-11T16:35:06.000Z"
                }
            }
        },
        {
            "id": 3602,
            "name": "Bitcoin SV",
            "symbol": "BSV",
            "slug": "bitcoin-sv",
            "num_market_pairs": 158,
            "date_added": "2018-11-09T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 21000000,
            "circulating_supply": 18068415,
            "total_supply": 18068415,
            "platform": null,
            "cmc_rank": 9,
            "last_updated": "2019-11-11T16:35:13.000Z",
            "quote": {
                "USD": {
                    "price": 131.687289972,
                    "volume_24h": 595247690.451222,
                    "percent_change_1h": -0.352489,
                    "percent_change_24h": -2.0982,
                    "percent_change_7d": 2.23363,
                    "market_cap": 2379380605.4394345,
                    "last_updated": "2019-11-11T16:35:13.000Z"
                }
            }
        },
        {
            "id": 512,
            "name": "Stellar",
            "symbol": "XLM",
            "slug": "stellar",
            "num_market_pairs": 308,
            "date_added": "2014-08-05T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 20054779553.7,
            "total_supply": 50000000000,
            "platform": null,
            "cmc_rank": 10,
            "last_updated": "2019-11-11T16:35:03.000Z",
            "quote": {
                "USD": {
                    "price": 0.0788541839619,
                    "volume_24h": 309297401.874967,
                    "percent_change_1h": -0.555332,
                    "percent_change_24h": 2.67263,
                    "percent_change_7d": 13.6813,
                    "market_cap": 1581403276.2428107,
                    "last_updated": "2019-11-11T16:35:03.000Z"
                }
            }
        },
        {
            "id": 1958,
            "name": "TRON",
            "symbol": "TRX",
            "slug": "tron",
            "num_market_pairs": 297,
            "date_added": "2017-09-13T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": null,
            "circulating_supply": 66682072191.4,
            "total_supply": 99281283754.3,
            "platform": null,
            "cmc_rank": 11,
            "last_updated": "2019-11-11T16:35:06.000Z",
            "quote": {
                "USD": {
                    "price": 0.0190494422923,
                    "volume_24h": 1065867412.74873,
                    "percent_change_1h": -0.0625066,
                    "percent_change_24h": -1.50047,
                    "percent_change_7d": -3.07446,
                    "market_cap": 1270256286.141057,
                    "last_updated": "2019-11-11T16:35:06.000Z"
                }
            }
        },
        {
            "id": 2010,
            "name": "Cardano",
            "symbol": "ADA",
            "slug": "cardano",
            "num_market_pairs": 117,
            "date_added": "2017-10-01T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 45000000000,
            "circulating_supply": 25927070538,
            "total_supply": 31112483745,
            "platform": null,
            "cmc_rank": 12,
            "last_updated": "2019-11-11T16:35:05.000Z",
            "quote": {
                "USD": {
                    "price": 0.0432766709207,
                    "volume_24h": 57745428.4286364,
                    "percent_change_1h": -0.0333557,
                    "percent_change_24h": -0.0826912,
                    "percent_change_7d": 1.32055,
                    "market_cap": 1122037299.6108022,
                    "last_updated": "2019-11-11T16:35:05.000Z"
                }
            }
        },
        {
            "id": 328,
            "name": "Monero",
            "symbol": "XMR",
            "slug": "monero",
            "num_market_pairs": 128,
            "date_added": "2014-05-21T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": null,
            "circulating_supply": 17296525.6200782,
            "total_supply": 17296525.6200782,
            "platform": null,
            "cmc_rank": 13,
            "last_updated": "2019-11-11T16:35:02.000Z",
            "quote": {
                "USD": {
                    "price": 62.5254460237,
                    "volume_24h": 236596668.513945,
                    "percent_change_1h": 0.198713,
                    "percent_change_24h": -1.71256,
                    "percent_change_7d": -0.815501,
                    "market_cap": 1081472979.0557435,
                    "last_updated": "2019-11-11T16:35:02.000Z"
                }
            }
        },
        {
            "id": 3957,
            "name": "UNUS SED LEO",
            "symbol": "LEO",
            "slug": "unus-sed-leo",
            "num_market_pairs": 27,
            "date_added": "2019-05-21T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 999498892.9,
            "total_supply": 999498892.9,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3"
            },
            "cmc_rank": 14,
            "last_updated": "2019-11-11T16:35:14.000Z",
            "quote": {
                "USD": {
                    "price": 0.968307964893,
                    "volume_24h": 13489684.7806204,
                    "percent_change_1h": -0.162291,
                    "percent_change_24h": -1.37058,
                    "percent_change_7d": -4.75012,
                    "market_cap": 967822738.8968055,
                    "last_updated": "2019-11-11T16:35:14.000Z"
                }
            }
        },
        {
            "id": 1975,
            "name": "Chainlink",
            "symbol": "LINK",
            "slug": "chainlink",
            "num_market_pairs": 124,
            "date_added": "2017-09-20T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 350000000,
            "total_supply": 1000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x514910771af9ca656af840dff83e8264ecf986ca"
            },
            "cmc_rank": 15,
            "last_updated": "2019-11-11T16:35:05.000Z",
            "quote": {
                "USD": {
                    "price": 2.72620437169,
                    "volume_24h": 100311669.742622,
                    "percent_change_1h": -0.0883496,
                    "percent_change_24h": -1.91441,
                    "percent_change_7d": 1.03345,
                    "market_cap": 954171530.0915,
                    "last_updated": "2019-11-11T16:35:05.000Z"
                }
            }
        },
        {
            "id": 2502,
            "name": "Huobi Token",
            "symbol": "HT",
            "slug": "huobi-token",
            "num_market_pairs": 128,
            "date_added": "2018-02-03T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 241284046.971921,
            "total_supply": 500000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x6f259637dcd74c767781e37bc6133cd6a68aa161"
            },
            "cmc_rank": 16,
            "last_updated": "2019-11-11T16:35:08.000Z",
            "quote": {
                "USD": {
                    "price": 3.8239580358,
                    "volume_24h": 123111104.062642,
                    "percent_change_1h": 0.217804,
                    "percent_change_24h": -1.85966,
                    "percent_change_7d": -2.19285,
                    "market_cap": 922660070.328622,
                    "last_updated": "2019-11-11T16:35:08.000Z"
                }
            }
        },
        {
            "id": 3794,
            "name": "Cosmos",
            "symbol": "ATOM",
            "slug": "cosmos",
            "num_market_pairs": 103,
            "date_added": "2019-03-14T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 190688439.2,
            "total_supply": 237928230.821588,
            "platform": null,
            "cmc_rank": 17,
            "last_updated": "2019-11-11T16:35:14.000Z",
            "quote": {
                "USD": {
                    "price": 4.3560192835,
                    "volume_24h": 189912779.71036,
                    "percent_change_1h": 0.30847,
                    "percent_change_24h": 3.77737,
                    "percent_change_7d": 21.9614,
                    "market_cap": 830642518.2957174,
                    "last_updated": "2019-11-11T16:35:14.000Z"
                }
            }
        },
        {
            "id": 1376,
            "name": "NEO",
            "symbol": "NEO",
            "slug": "neo",
            "num_market_pairs": 229,
            "date_added": "2016-09-08T00:00:00.000Z",
            "tags": [],
            "max_supply": 100000000,
            "circulating_supply": 70538831,
            "total_supply": 100000000,
            "platform": null,
            "cmc_rank": 18,
            "last_updated": "2019-11-11T16:35:03.000Z",
            "quote": {
                "USD": {
                    "price": 11.2168127621,
                    "volume_24h": 468241698.210615,
                    "percent_change_1h": 0.045578,
                    "percent_change_24h": 1.99062,
                    "percent_change_7d": -1.22864,
                    "market_cap": 791220859.7844151,
                    "last_updated": "2019-11-11T16:35:03.000Z"
                }
            }
        },
        {
            "id": 2011,
            "name": "Tezos",
            "symbol": "XTZ",
            "slug": "tezos",
            "num_market_pairs": 51,
            "date_added": "2017-10-02T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 660373611.97278,
            "total_supply": 801312599.488106,
            "platform": null,
            "cmc_rank": 19,
            "last_updated": "2019-11-11T16:35:05.000Z",
            "quote": {
                "USD": {
                    "price": 1.19225899505,
                    "volume_24h": 26470907.6776979,
                    "percent_change_1h": -0.0969133,
                    "percent_change_24h": -2.91573,
                    "percent_change_7d": 33.3184,
                    "market_cap": 787336378.9682053,
                    "last_updated": "2019-11-11T16:35:05.000Z"
                }
            }
        },
        {
            "id": 1720,
            "name": "IOTA",
            "symbol": "MIOTA",
            "slug": "iota",
            "num_market_pairs": 53,
            "date_added": "2017-06-13T00:00:00.000Z",
            "tags": [],
            "max_supply": 2779530283,
            "circulating_supply": 2779530283,
            "total_supply": 2779530283,
            "platform": null,
            "cmc_rank": 20,
            "last_updated": "2019-11-11T16:35:04.000Z",
            "quote": {
                "USD": {
                    "price": 0.258267004293,
                    "volume_24h": 8127779.04865807,
                    "percent_change_1h": -0.0831343,
                    "percent_change_24h": -3.20715,
                    "percent_change_7d": -5.24311,
                    "market_cap": 717860959.5320845,
                    "last_updated": "2019-11-11T16:35:04.000Z"
                }
            }
        },
        {
            "id": 131,
            "name": "Dash",
            "symbol": "DASH",
            "slug": "dash",
            "num_market_pairs": 276,
            "date_added": "2014-02-14T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 18900000,
            "circulating_supply": 9148276.79313015,
            "total_supply": 9148276.79313015,
            "platform": null,
            "cmc_rank": 21,
            "last_updated": "2019-11-11T16:35:03.000Z",
            "quote": {
                "USD": {
                    "price": 71.2837513602,
                    "volume_24h": 412857656.964077,
                    "percent_change_1h": 0.766027,
                    "percent_change_24h": 1.0975,
                    "percent_change_7d": -1.91188,
                    "market_cap": 652123488.2957774,
                    "last_updated": "2019-11-11T16:35:03.000Z"
                }
            }
        },
        {
            "id": 1518,
            "name": "Maker",
            "symbol": "MKR",
            "slug": "maker",
            "num_market_pairs": 79,
            "date_added": "2017-01-29T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 1000000,
            "total_supply": 1000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
            },
            "cmc_rank": 22,
            "last_updated": "2019-11-11T16:35:03.000Z",
            "quote": {
                "USD": {
                    "price": 647.353456694,
                    "volume_24h": 5635470.46630217,
                    "percent_change_1h": -0.103701,
                    "percent_change_24h": -2.76749,
                    "percent_change_7d": 19.8241,
                    "market_cap": 647353456.694,
                    "last_updated": "2019-11-11T16:35:03.000Z"
                }
            }
        },
        {
            "id": 1321,
            "name": "Ethereum Classic",
            "symbol": "ETC",
            "slug": "ethereum-classic",
            "num_market_pairs": 223,
            "date_added": "2016-07-24T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 210000000,
            "circulating_supply": 114997602,
            "total_supply": 114997602,
            "platform": null,
            "cmc_rank": 23,
            "last_updated": "2019-11-11T16:35:03.000Z",
            "quote": {
                "USD": {
                    "price": 4.9138813341,
                    "volume_24h": 677574744.860238,
                    "percent_change_1h": -0.238066,
                    "percent_change_24h": -2.2998,
                    "percent_change_7d": -0.884675,
                    "market_cap": 565084569.9340608,
                    "last_updated": "2019-11-11T16:35:03.000Z"
                }
            }
        },
        {
            "id": 2566,
            "name": "Ontology",
            "symbol": "ONT",
            "slug": "ontology",
            "num_market_pairs": 107,
            "date_added": "2018-03-08T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 577351170,
            "total_supply": 1000000000,
            "platform": null,
            "cmc_rank": 24,
            "last_updated": "2019-11-11T16:35:08.000Z",
            "quote": {
                "USD": {
                    "price": 0.838716699818,
                    "volume_24h": 105012572.498222,
                    "percent_change_1h": 0.166565,
                    "percent_change_24h": -0.493209,
                    "percent_change_7d": -8.33887,
                    "market_cap": 484234067.93846107,
                    "last_updated": "2019-11-11T16:35:08.000Z"
                }
            }
        },
        {
            "id": 3408,
            "name": "USD Coin",
            "symbol": "USDC",
            "slug": "usd-coin",
            "num_market_pairs": 180,
            "date_added": "2018-10-08T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 450396725.279302,
            "total_supply": 452542961.59,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
            },
            "cmc_rank": 25,
            "last_updated": "2019-11-11T16:35:13.000Z",
            "quote": {
                "USD": {
                    "price": 1.00492913482,
                    "volume_24h": 248030524.389852,
                    "percent_change_1h": 0.0809173,
                    "percent_change_24h": 0.271641,
                    "percent_change_7d": 0.351626,
                    "market_cap": 452616791.4606902,
                    "last_updated": "2019-11-11T16:35:13.000Z"
                }
            }
        },
        {
            "id": 3635,
            "name": "Crypto.com Coin",
            "symbol": "CRO",
            "slug": "crypto-com-coin",
            "num_market_pairs": 38,
            "date_added": "2018-12-14T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 11584474885.8448,
            "total_supply": 100000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b"
            },
            "cmc_rank": 26,
            "last_updated": "2019-11-11T16:35:13.000Z",
            "quote": {
                "USD": {
                    "price": 0.0355642079265,
                    "volume_24h": 20988055.2142949,
                    "percent_change_1h": 1.49229,
                    "percent_change_24h": 0.213559,
                    "percent_change_7d": -5.45801,
                    "market_cap": 411992673.5595019,
                    "last_updated": "2019-11-11T16:35:13.000Z"
                }
            }
        },
        {
            "id": 873,
            "name": "NEM",
            "symbol": "XEM",
            "slug": "nem",
            "num_market_pairs": 97,
            "date_added": "2015-04-01T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 8999999999,
            "total_supply": 8999999999,
            "platform": null,
            "cmc_rank": 27,
            "last_updated": "2019-11-11T16:35:02.000Z",
            "quote": {
                "USD": {
                    "price": 0.0395014797682,
                    "volume_24h": 32440855.2891328,
                    "percent_change_1h": -0.730852,
                    "percent_change_24h": -1.97179,
                    "percent_change_7d": -5.79384,
                    "market_cap": 355513317.8742986,
                    "last_updated": "2019-11-11T16:35:02.000Z"
                }
            }
        },
        {
            "id": 1697,
            "name": "Basic Attention Token",
            "symbol": "BAT",
            "slug": "basic-attention-token",
            "num_market_pairs": 161,
            "date_added": "2017-06-01T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 1356386750.7463,
            "total_supply": 1500000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x0d8775f648430679a709e98d2b0cb6250d2887ef"
            },
            "cmc_rank": 28,
            "last_updated": "2019-11-11T16:35:04.000Z",
            "quote": {
                "USD": {
                    "price": 0.244159084794,
                    "volume_24h": 53454809.3224138,
                    "percent_change_1h": 0.30579,
                    "percent_change_24h": -1.97528,
                    "percent_change_7d": 1.27871,
                    "market_cap": 331174147.688924,
                    "last_updated": "2019-11-11T16:35:04.000Z"
                }
            }
        },
        {
            "id": 74,
            "name": "Dogecoin",
            "symbol": "DOGE",
            "slug": "dogecoin",
            "num_market_pairs": 285,
            "date_added": "2013-12-15T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": null,
            "circulating_supply": 122008871580.98,
            "total_supply": 122008871580.98,
            "platform": null,
            "cmc_rank": 29,
            "last_updated": "2019-11-11T16:35:03.000Z",
            "quote": {
                "USD": {
                    "price": 0.00268184104714,
                    "volume_24h": 88242139.6056184,
                    "percent_change_1h": 0.0886755,
                    "percent_change_24h": -2.59004,
                    "percent_change_7d": 2.8484,
                    "market_cap": 327208399.9211052,
                    "last_updated": "2019-11-11T16:35:03.000Z"
                }
            }
        },
        {
            "id": 3077,
            "name": "VeChain",
            "symbol": "VET",
            "slug": "vechain",
            "num_market_pairs": 83,
            "date_added": "2017-08-22T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 55454734800,
            "total_supply": 86712634466,
            "platform": null,
            "cmc_rank": 30,
            "last_updated": "2019-11-11T16:35:11.000Z",
            "quote": {
                "USD": {
                    "price": 0.0055620853034,
                    "volume_24h": 77838479.5389621,
                    "percent_change_1h": -0.218093,
                    "percent_change_24h": 2.03619,
                    "percent_change_7d": 29.7554,
                    "market_cap": 308443965.43502456,
                    "last_updated": "2019-11-11T16:35:11.000Z"
                }
            }
        },
        {
            "id": 1437,
            "name": "Zcash",
            "symbol": "ZEC",
            "slug": "zcash",
            "num_market_pairs": 222,
            "date_added": "2016-10-29T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": null,
            "circulating_supply": 7828181.25,
            "total_supply": 7828181.25,
            "platform": null,
            "cmc_rank": 31,
            "last_updated": "2019-11-11T16:35:04.000Z",
            "quote": {
                "USD": {
                    "price": 37.2086424147,
                    "volume_24h": 149072517.561863,
                    "percent_change_1h": -0.0363883,
                    "percent_change_24h": 0.440338,
                    "percent_change_7d": -1.45715,
                    "market_cap": 291275996.8887093,
                    "last_updated": "2019-11-11T16:35:04.000Z"
                }
            }
        },
        {
            "id": 3330,
            "name": "Paxos Standard",
            "symbol": "PAX",
            "slug": "paxos-standard",
            "num_market_pairs": 100,
            "date_added": "2018-09-27T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 232005637.785823,
            "total_supply": 232005718.91,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x8e870d67f660d95d5be530380d0ec0bd388289e1"
            },
            "cmc_rank": 32,
            "last_updated": "2019-11-11T16:35:13.000Z",
            "quote": {
                "USD": {
                    "price": 1.00395802503,
                    "volume_24h": 211310725.063667,
                    "percent_change_1h": -0.0242914,
                    "percent_change_24h": 0.21197,
                    "percent_change_7d": 0.322125,
                    "market_cap": 232923921.9072804,
                    "last_updated": "2019-11-11T16:35:13.000Z"
                }
            }
        },
        {
            "id": 1168,
            "name": "Decred",
            "symbol": "DCR",
            "slug": "decred",
            "num_market_pairs": 46,
            "date_added": "2016-02-10T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 21000000,
            "circulating_supply": 10659046.6824006,
            "total_supply": 10659046.6824006,
            "platform": null,
            "cmc_rank": 33,
            "last_updated": "2019-11-11T16:35:02.000Z",
            "quote": {
                "USD": {
                    "price": 20.7979666947,
                    "volume_24h": 13262272.5578627,
                    "percent_change_1h": 0.33482,
                    "percent_change_24h": 2.44992,
                    "percent_change_7d": -2.09568,
                    "market_cap": 221686497.8978202,
                    "last_updated": "2019-11-11T16:35:02.000Z"
                }
            }
        },
        {
            "id": 3662,
            "name": "HedgeTrade",
            "symbol": "HEDG",
            "slug": "hedgetrade",
            "num_market_pairs": 8,
            "date_added": "2019-01-03T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 288330855.057208,
            "total_supply": 1000000000.05,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xF1290473E210b2108A85237fbCd7b6eb42Cc654F"
            },
            "cmc_rank": 34,
            "last_updated": "2019-11-11T16:35:13.000Z",
            "quote": {
                "USD": {
                    "price": 0.722743434684,
                    "volume_24h": 294606.433752825,
                    "percent_change_1h": 0.334374,
                    "percent_change_24h": -3.11876,
                    "percent_change_7d": -6.52617,
                    "market_cap": 208389232.50942108,
                    "last_updated": "2019-11-11T16:35:13.000Z"
                }
            }
        },
        {
            "id": 1684,
            "name": "Qtum",
            "symbol": "QTUM",
            "slug": "qtum",
            "num_market_pairs": 173,
            "date_added": "2017-05-24T00:00:00.000Z",
            "tags": [],
            "max_supply": 107822406,
            "circulating_supply": 96156436.0484598,
            "total_supply": 101906456,
            "platform": null,
            "cmc_rank": 35,
            "last_updated": "2019-11-11T16:35:04.000Z",
            "quote": {
                "USD": {
                    "price": 2.13423531609,
                    "volume_24h": 450291716.302874,
                    "percent_change_1h": -0.198054,
                    "percent_change_24h": -1.26513,
                    "percent_change_7d": -4.6196,
                    "market_cap": 205220461.68397245,
                    "last_updated": "2019-11-11T16:35:04.000Z"
                }
            }
        },
        {
            "id": 1896,
            "name": "0x",
            "symbol": "ZRX",
            "slug": "0x",
            "num_market_pairs": 183,
            "date_added": "2017-08-16T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 601745345.308496,
            "total_supply": 1000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xe41d2489571d322189246dafa5ebde1f4699f498"
            },
            "cmc_rank": 36,
            "last_updated": "2019-11-11T16:35:04.000Z",
            "quote": {
                "USD": {
                    "price": 0.311410823559,
                    "volume_24h": 21387834.687537,
                    "percent_change_1h": 0.435624,
                    "percent_change_24h": -0.685949,
                    "percent_change_7d": 5.51012,
                    "market_cap": 187390013.5553136,
                    "last_updated": "2019-11-11T16:35:04.000Z"
                }
            }
        },
        {
            "id": 2563,
            "name": "TrueUSD",
            "symbol": "TUSD",
            "slug": "trueusd",
            "num_market_pairs": 155,
            "date_added": "2018-03-06T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 172916954.12,
            "total_supply": 172916954.12,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x0000000000085d4780B73119b644AE5ecd22b376"
            },
            "cmc_rank": 37,
            "last_updated": "2019-11-11T16:35:08.000Z",
            "quote": {
                "USD": {
                    "price": 1.00334499566,
                    "volume_24h": 162869737.154357,
                    "percent_change_1h": 0.00947417,
                    "percent_change_24h": 0.117874,
                    "percent_change_7d": 0.282153,
                    "market_cap": 173495360.58107182,
                    "last_updated": "2019-11-11T16:35:08.000Z"
                }
            }
        },
        {
            "id": 3704,
            "name": "V Systems",
            "symbol": "VSYS",
            "slug": "v-systems",
            "num_market_pairs": 33,
            "date_added": "2019-03-05T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 1849080691,
            "total_supply": 3763939155,
            "platform": null,
            "cmc_rank": 38,
            "last_updated": "2019-11-11T16:35:13.000Z",
            "quote": {
                "USD": {
                    "price": 0.0856457092111,
                    "volume_24h": 5825065.17570621,
                    "percent_change_1h": -1.41643,
                    "percent_change_24h": 9.7939,
                    "percent_change_7d": 21.5545,
                    "market_cap": 158365827.16924584,
                    "last_updated": "2019-11-11T16:35:13.000Z"
                }
            }
        },
        {
            "id": 2682,
            "name": "Holo",
            "symbol": "HOT",
            "slug": "holo",
            "num_market_pairs": 64,
            "date_added": "2018-04-29T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 161335977822.48,
            "total_supply": 177619433541.141,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2"
            },
            "cmc_rank": 39,
            "last_updated": "2019-11-11T16:35:08.000Z",
            "quote": {
                "USD": {
                    "price": 0.00095142800496,
                    "volume_24h": 13110271.7065998,
                    "percent_change_1h": 0.354756,
                    "percent_change_24h": -0.346772,
                    "percent_change_7d": 3.19227,
                    "market_cap": 153499567.50791296,
                    "last_updated": "2019-11-11T16:35:08.000Z"
                }
            }
        },
        {
            "id": 2083,
            "name": "Bitcoin Gold",
            "symbol": "BTG",
            "slug": "bitcoin-gold",
            "num_market_pairs": 83,
            "date_added": "2017-10-23T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 21000000,
            "circulating_supply": 17513923.589,
            "total_supply": 17513923.589,
            "platform": null,
            "cmc_rank": 40,
            "last_updated": "2019-11-11T16:35:05.000Z",
            "quote": {
                "USD": {
                    "price": 8.64160417189,
                    "volume_24h": 16051276.6533799,
                    "percent_change_1h": 0.104404,
                    "percent_change_24h": -0.814867,
                    "percent_change_7d": 3.7438,
                    "market_cap": 151348395.15286508,
                    "last_updated": "2019-11-11T16:35:05.000Z"
                }
            }
        },
        {
            "id": 2585,
            "name": "Centrality",
            "symbol": "CENNZ",
            "slug": "centrality",
            "num_market_pairs": 2,
            "date_added": "2018-03-13T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 1063737441.99351,
            "total_supply": 1200000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x1122b6a0e00dce0563082b6e2953f3a943855c1f"
            },
            "cmc_rank": 41,
            "last_updated": "2019-11-11T16:35:08.000Z",
            "quote": {
                "USD": {
                    "price": 0.136557460566,
                    "volume_24h": 430085.681053119,
                    "percent_change_1h": 0.772692,
                    "percent_change_24h": -0.0501816,
                    "percent_change_7d": 19.2602,
                    "market_cap": 145261283.78760645,
                    "last_updated": "2019-11-11T16:35:08.000Z"
                }
            }
        },
        {
            "id": 1567,
            "name": "Nano",
            "symbol": "NANO",
            "slug": "nano",
            "num_market_pairs": 49,
            "date_added": "2017-03-06T00:00:00.000Z",
            "tags": [],
            "max_supply": 133248297.197,
            "circulating_supply": 133248297.197,
            "total_supply": 133248297.197,
            "platform": null,
            "cmc_rank": 42,
            "last_updated": "2019-11-11T16:35:03.000Z",
            "quote": {
                "USD": {
                    "price": 1.03069543164,
                    "volume_24h": 4775835.12919792,
                    "percent_change_1h": -0.0585179,
                    "percent_change_24h": -2.26415,
                    "percent_change_7d": 17.9245,
                    "market_cap": 137338411.19475693,
                    "last_updated": "2019-11-11T16:35:03.000Z"
                }
            }
        },
        {
            "id": 3351,
            "name": "ZB",
            "symbol": "ZB",
            "slug": "zb",
            "num_market_pairs": 9,
            "date_added": "2018-09-27T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 463288810,
            "total_supply": 2100000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xbd0793332e9fb844a52a205a233ef27a5b34b927"
            },
            "cmc_rank": 43,
            "last_updated": "2019-11-11T16:35:12.000Z",
            "quote": {
                "USD": {
                    "price": 0.294234350428,
                    "volume_24h": 250035725.065474,
                    "percent_change_1h": 0.291465,
                    "percent_change_24h": -0.402088,
                    "percent_change_7d": -1.08295,
                    "market_cap": 136315482.0709111,
                    "last_updated": "2019-11-11T16:35:12.000Z"
                }
            }
        },
        {
            "id": 2577,
            "name": "Ravencoin",
            "symbol": "RVN",
            "slug": "ravencoin",
            "num_market_pairs": 46,
            "date_added": "2018-03-10T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 21000000000,
            "circulating_supply": 4831590000,
            "total_supply": 4831590000,
            "platform": null,
            "cmc_rank": 44,
            "last_updated": "2019-11-11T16:35:08.000Z",
            "quote": {
                "USD": {
                    "price": 0.0281748351601,
                    "volume_24h": 9443383.65936923,
                    "percent_change_1h": -0.13591,
                    "percent_change_24h": -3.25178,
                    "percent_change_7d": -4.45285,
                    "market_cap": 136129251.81118757,
                    "last_updated": "2019-11-11T16:35:08.000Z"
                }
            }
        },
        {
            "id": 1808,
            "name": "OmiseGO",
            "symbol": "OMG",
            "slug": "omisego",
            "num_market_pairs": 209,
            "date_added": "2017-07-14T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 140245398.245133,
            "total_supply": 140245398.245133,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"
            },
            "cmc_rank": 45,
            "last_updated": "2019-11-11T16:35:06.000Z",
            "quote": {
                "USD": {
                    "price": 0.951802459183,
                    "volume_24h": 91290169.285201,
                    "percent_change_1h": -0.397205,
                    "percent_change_24h": -4.51816,
                    "percent_change_7d": -2.79001,
                    "market_cap": 133485914.93881679,
                    "last_updated": "2019-11-11T16:35:06.000Z"
                }
            }
        },
        {
            "id": 1104,
            "name": "Augur",
            "symbol": "REP",
            "slug": "augur",
            "num_market_pairs": 74,
            "date_added": "2015-10-27T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 11000000,
            "total_supply": 11000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x1985365e9f78359a9b6ad760e32412f4a445e862"
            },
            "cmc_rank": 46,
            "last_updated": "2019-11-11T16:35:02.000Z",
            "quote": {
                "USD": {
                    "price": 11.8517610631,
                    "volume_24h": 8488908.37862116,
                    "percent_change_1h": 0.445672,
                    "percent_change_24h": -3.79933,
                    "percent_change_7d": -0.5847,
                    "market_cap": 130369371.69409999,
                    "last_updated": "2019-11-11T16:35:02.000Z"
                }
            }
        },
        {
            "id": 3437,
            "name": "ABBC Coin",
            "symbol": "ABBC",
            "slug": "abbc-coin",
            "num_market_pairs": 39,
            "date_added": "2018-10-12T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": null,
            "circulating_supply": 556626634.357622,
            "total_supply": 1004488460.0178,
            "platform": null,
            "cmc_rank": 47,
            "last_updated": "2019-11-11T16:35:12.000Z",
            "quote": {
                "USD": {
                    "price": 0.233256388607,
                    "volume_24h": 62917175.1543903,
                    "percent_change_1h": 0.193198,
                    "percent_change_24h": -2.94748,
                    "percent_change_7d": -5.55105,
                    "market_cap": 129836718.53272797,
                    "last_updated": "2019-11-11T16:35:12.000Z"
                }
            }
        },
        {
            "id": 4030,
            "name": "Algorand",
            "symbol": "ALGO",
            "slug": "algorand",
            "num_market_pairs": 58,
            "date_added": "2019-06-20T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": null,
            "circulating_supply": 429488640.249364,
            "total_supply": 2960760483.24936,
            "platform": null,
            "cmc_rank": 48,
            "last_updated": "2019-11-11T16:35:14.000Z",
            "quote": {
                "USD": {
                    "price": 0.272226999803,
                    "volume_24h": 122406402.803582,
                    "percent_change_1h": 0.472634,
                    "percent_change_24h": 3.51362,
                    "percent_change_7d": 4.87813,
                    "market_cap": 116918403.98455437,
                    "last_updated": "2019-11-11T16:35:14.000Z"
                }
            }
        },
        {
            "id": 2586,
            "name": "Synthetix Network Token",
            "symbol": "SNX",
            "slug": "synthetix-network-token",
            "num_market_pairs": 7,
            "date_added": "2018-03-14T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 143729614.848579,
            "total_supply": 150480769.230769,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xc011a72400e58ecd99ee497cf89e3775d4bd732f"
            },
            "cmc_rank": 49,
            "last_updated": "2019-11-11T16:35:08.000Z",
            "quote": {
                "USD": {
                    "price": 0.79168647209,
                    "volume_24h": 103938.485883259,
                    "percent_change_1h": -0.0701963,
                    "percent_change_24h": 0.625213,
                    "percent_change_7d": 7.39929,
                    "market_cap": 113788791.71432598,
                    "last_updated": "2019-11-11T16:35:08.000Z"
                }
            }
        },
        {
            "id": 1866,
            "name": "Bytom",
            "symbol": "BTM",
            "slug": "bytom",
            "num_market_pairs": 50,
            "date_added": "2017-08-08T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": null,
            "circulating_supply": 1002499275,
            "total_supply": 1407000000,
            "platform": null,
            "cmc_rank": 50,
            "last_updated": "2019-11-11T16:35:04.000Z",
            "quote": {
                "USD": {
                    "price": 0.111403031952,
                    "volume_24h": 34031329.8826254,
                    "percent_change_1h": -0.989643,
                    "percent_change_24h": -7.15382,
                    "percent_change_7d": -16.9026,
                    "market_cap": 111681458.76468185,
                    "last_updated": "2019-11-11T16:35:04.000Z"
                }
            }
        },
        {
            "id": 4172,
            "name": "LUNA",
            "symbol": "LUNA",
            "slug": "luna",
            "num_market_pairs": 10,
            "date_added": "2019-07-26T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 287765804.430561,
            "total_supply": 995859074.224591,
            "platform": null,
            "cmc_rank": 51,
            "last_updated": "2019-11-11T16:35:14.000Z",
            "quote": {
                "USD": {
                    "price": 0.376736235069,
                    "volume_24h": 1335624.82024681,
                    "percent_change_1h": -0.365377,
                    "percent_change_24h": -7.06387,
                    "percent_change_7d": -17.4373,
                    "market_cap": 108411805.74277171,
                    "last_updated": "2019-11-11T16:35:14.000Z"
                }
            }
        },
        {
            "id": 2308,
            "name": "Dai",
            "symbol": "DAI",
            "slug": "dai",
            "num_market_pairs": 106,
            "date_added": "2017-12-24T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 101425695.652394,
            "total_supply": 101425695.652394,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
            },
            "cmc_rank": 52,
            "last_updated": "2019-11-11T16:35:06.000Z",
            "quote": {
                "USD": {
                    "price": 1.00613145476,
                    "volume_24h": 3491543.4810907,
                    "percent_change_1h": 0.0397749,
                    "percent_change_24h": 0.09895,
                    "percent_change_7d": 0.0503948,
                    "market_cap": 102047582.71678817,
                    "last_updated": "2019-11-11T16:35:06.000Z"
                }
            }
        },
        {
            "id": 2453,
            "name": "EDUCare",
            "symbol": "EKT",
            "slug": "educare",
            "num_market_pairs": 6,
            "date_added": "2018-01-23T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 950000000,
            "total_supply": 1000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x4ecdb6385f3db3847f9c4a9bf3f9917bb27a5452"
            },
            "cmc_rank": 53,
            "last_updated": "2019-11-11T16:35:07.000Z",
            "quote": {
                "USD": {
                    "price": 0.104842756463,
                    "volume_24h": 6598679.84328696,
                    "percent_change_1h": -4.73308,
                    "percent_change_24h": -7.67375,
                    "percent_change_7d": -15.4685,
                    "market_cap": 99600618.63984999,
                    "last_updated": "2019-11-11T16:35:07.000Z"
                }
            }
        },
        {
            "id": 4079,
            "name": "Silverway",
            "symbol": "SLV",
            "slug": "silverway",
            "num_market_pairs": 5,
            "date_added": "2019-07-03T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 100000000,
            "total_supply": 1000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x4c1c4957d22d8f373aed54d0853b090666f6f9de"
            },
            "cmc_rank": 54,
            "last_updated": "2019-11-11T16:35:14.000Z",
            "quote": {
                "USD": {
                    "price": 0.97794057494,
                    "volume_24h": 2484479.20050422,
                    "percent_change_1h": -0.148666,
                    "percent_change_24h": 3.71235,
                    "percent_change_7d": -11.6529,
                    "market_cap": 97794057.494,
                    "last_updated": "2019-11-11T16:35:14.000Z"
                }
            }
        },
        {
            "id": 2222,
            "name": "Bitcoin Diamond",
            "symbol": "BCD",
            "slug": "bitcoin-diamond",
            "num_market_pairs": 24,
            "date_added": "2017-11-24T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 210000000,
            "circulating_supply": 186492897.953,
            "total_supply": 189492897.953,
            "platform": null,
            "cmc_rank": 55,
            "last_updated": "2019-11-11T16:35:06.000Z",
            "quote": {
                "USD": {
                    "price": 0.517629733501,
                    "volume_24h": 4765003.87587433,
                    "percent_change_1h": 1.72729,
                    "percent_change_24h": 2.12054,
                    "percent_change_7d": 0.688815,
                    "market_cap": 96534269.06724057,
                    "last_updated": "2019-11-11T16:35:06.000Z"
                }
            }
        },
        {
            "id": 2087,
            "name": "KuCoin Shares",
            "symbol": "KCS",
            "slug": "kucoin-shares",
            "num_market_pairs": 15,
            "date_added": "2017-10-24T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 82363551,
            "total_supply": 172363551,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x039b5649a59967e3e936d7471f9c3700100ee1ab"
            },
            "cmc_rank": 56,
            "last_updated": "2019-11-11T16:35:05.000Z",
            "quote": {
                "USD": {
                    "price": 1.16428072859,
                    "volume_24h": 5967922.91802593,
                    "percent_change_1h": -0.393643,
                    "percent_change_24h": -2.87402,
                    "percent_change_7d": -22.7581,
                    "market_cap": 95894295.16753963,
                    "last_updated": "2019-11-11T16:35:05.000Z"
                }
            }
        },
        {
            "id": 3718,
            "name": "BitTorrent",
            "symbol": "BTT",
            "slug": "bittorrent",
            "num_market_pairs": 130,
            "date_added": "2019-01-31T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 212116500000,
            "total_supply": 990000000000,
            "platform": {
                "id": 1958,
                "name": "TRON",
                "symbol": "TRX",
                "slug": "tron",
                "token_address": "1002000"
            },
            "cmc_rank": 57,
            "last_updated": "2019-11-11T16:35:14.000Z",
            "quote": {
                "USD": {
                    "price": 0.000438078476949,
                    "volume_24h": 78487244.11086,
                    "percent_change_1h": 0.138584,
                    "percent_change_24h": -1.45785,
                    "percent_change_7d": -4.23814,
                    "market_cap": 92923673.25575256,
                    "last_updated": "2019-11-11T16:35:14.000Z"
                }
            }
        },
        {
            "id": 1521,
            "name": "Komodo",
            "symbol": "KMD",
            "slug": "komodo",
            "num_market_pairs": 23,
            "date_added": "2017-02-05T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 200000000,
            "circulating_supply": 116889637.0499,
            "total_supply": 116889637.0499,
            "platform": null,
            "cmc_rank": 58,
            "last_updated": "2019-11-11T16:35:03.000Z",
            "quote": {
                "USD": {
                    "price": 0.788657679142,
                    "volume_24h": 6893790.35045093,
                    "percent_change_1h": 0.00541783,
                    "percent_change_24h": -2.79937,
                    "percent_change_7d": 22.6396,
                    "market_cap": 92185909.87152487,
                    "last_updated": "2019-11-11T16:35:03.000Z"
                }
            }
        },
        {
            "id": 1214,
            "name": "Lisk",
            "symbol": "LSK",
            "slug": "lisk",
            "num_market_pairs": 58,
            "date_added": "2016-04-06T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 121432700.512821,
            "total_supply": 136464852,
            "platform": null,
            "cmc_rank": 59,
            "last_updated": "2019-11-11T16:35:02.000Z",
            "quote": {
                "USD": {
                    "price": 0.759013735605,
                    "volume_24h": 1403353.92102769,
                    "percent_change_1h": 0.0583061,
                    "percent_change_24h": -2.04942,
                    "percent_change_7d": -4.82659,
                    "market_cap": 92169087.64083946,
                    "last_updated": "2019-11-11T16:35:02.000Z"
                }
            }
        },
        {
            "id": 109,
            "name": "DigiByte",
            "symbol": "DGB",
            "slug": "digibyte",
            "num_market_pairs": 78,
            "date_added": "2014-02-06T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 21000000000,
            "circulating_supply": 12478450064.5953,
            "total_supply": 12478450064.5953,
            "platform": null,
            "cmc_rank": 60,
            "last_updated": "2019-11-11T16:35:02.000Z",
            "quote": {
                "USD": {
                    "price": 0.00699624589348,
                    "volume_24h": 1250118.75550539,
                    "percent_change_1h": 0.1329,
                    "percent_change_24h": -1.93441,
                    "percent_change_7d": -3.93163,
                    "market_cap": 87302305.0214201,
                    "last_updated": "2019-11-11T16:35:02.000Z"
                }
            }
        },
        {
            "id": 3139,
            "name": "DxChain Token",
            "symbol": "DX",
            "slug": "dxchain-token",
            "num_market_pairs": 8,
            "date_added": "2018-08-10T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 49999999999.6862,
            "total_supply": 100000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x973e52691176d36453868D9d86572788d27041A9"
            },
            "cmc_rank": 61,
            "last_updated": "2019-11-11T16:35:11.000Z",
            "quote": {
                "USD": {
                    "price": 0.00168894590302,
                    "volume_24h": 7702707.90594295,
                    "percent_change_1h": -36.6332,
                    "percent_change_24h": -12.9726,
                    "percent_change_7d": 148.672,
                    "market_cap": 84447295.15047002,
                    "last_updated": "2019-11-11T16:35:11.000Z"
                }
            }
        },
        {
            "id": 1042,
            "name": "Siacoin",
            "symbol": "SC",
            "slug": "siacoin",
            "num_market_pairs": 38,
            "date_added": "2015-08-26T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": null,
            "circulating_supply": 41817047634,
            "total_supply": 41817047634,
            "platform": null,
            "cmc_rank": 62,
            "last_updated": "2019-11-11T16:35:02.000Z",
            "quote": {
                "USD": {
                    "price": 0.00198299073568,
                    "volume_24h": 2922788.12252261,
                    "percent_change_1h": 0.355265,
                    "percent_change_24h": -2.169,
                    "percent_change_7d": -5.27626,
                    "market_cap": 82922818.05171126,
                    "last_updated": "2019-11-11T16:35:02.000Z"
                }
            }
        },
        {
            "id": 1903,
            "name": "HyperCash",
            "symbol": "HC",
            "slug": "hypercash",
            "num_market_pairs": 32,
            "date_added": "2017-08-20T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 84000000,
            "circulating_supply": 44426646.705052,
            "total_supply": 44426646.705052,
            "platform": null,
            "cmc_rank": 63,
            "last_updated": "2019-11-11T16:35:04.000Z",
            "quote": {
                "USD": {
                    "price": 1.86117783615,
                    "volume_24h": 5509051.88336951,
                    "percent_change_1h": -0.0397021,
                    "percent_change_24h": -0.317734,
                    "percent_change_7d": -5.72252,
                    "market_cap": 82685890.18190922,
                    "last_updated": "2019-11-11T16:35:04.000Z"
                }
            }
        },
        {
            "id": 2907,
            "name": "Karatgold Coin",
            "symbol": "KBC",
            "slug": "karatgold-coin",
            "num_market_pairs": 28,
            "date_added": "2018-07-06T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 3752557396.88502,
            "total_supply": 12000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xf3586684107ce0859c44aa2b2e0fb8cd8731a15a"
            },
            "cmc_rank": 64,
            "last_updated": "2019-11-11T16:35:09.000Z",
            "quote": {
                "USD": {
                    "price": 0.0219868227707,
                    "volume_24h": 2715969.64833041,
                    "percent_change_1h": 0.804739,
                    "percent_change_24h": 0.799872,
                    "percent_change_7d": 8.68031,
                    "market_cap": 82506814.42219026,
                    "last_updated": "2019-11-11T16:35:09.000Z"
                }
            }
        },
        {
            "id": 2099,
            "name": "ICON",
            "symbol": "ICX",
            "slug": "icon",
            "num_market_pairs": 64,
            "date_added": "2017-10-27T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 503955586.722621,
            "total_supply": 800460000,
            "platform": null,
            "cmc_rank": 65,
            "last_updated": "2019-11-11T16:35:05.000Z",
            "quote": {
                "USD": {
                    "price": 0.160770333285,
                    "volume_24h": 7808469.12064042,
                    "percent_change_1h": -0.00476212,
                    "percent_change_24h": -2.37916,
                    "percent_change_7d": -5.4701,
                    "market_cap": 81021107.63823351,
                    "last_updated": "2019-11-11T16:35:05.000Z"
                }
            }
        },
        {
            "id": 2874,
            "name": "Aurora",
            "symbol": "AOA",
            "slug": "aurora",
            "num_market_pairs": 12,
            "date_added": "2018-06-26T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 6542330148.20859,
            "total_supply": 10000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x9ab165d795019b6d8b3e971dda91071421305e5a"
            },
            "cmc_rank": 66,
            "last_updated": "2019-11-11T16:35:09.000Z",
            "quote": {
                "USD": {
                    "price": 0.0123769488235,
                    "volume_24h": 3596713.12003439,
                    "percent_change_1h": 3.7549,
                    "percent_change_24h": 29.5222,
                    "percent_change_7d": 59.615,
                    "market_cap": 80974085.43081889,
                    "last_updated": "2019-11-11T16:35:09.000Z"
                }
            }
        },
        {
            "id": 4279,
            "name": "Swipe",
            "symbol": "SXP",
            "slug": "swipe",
            "num_market_pairs": 9,
            "date_added": "2019-08-26T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 61135911.166,
            "total_supply": 300000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9"
            },
            "cmc_rank": 67,
            "last_updated": "2019-11-11T16:35:15.000Z",
            "quote": {
                "USD": {
                    "price": 1.30828484439,
                    "volume_24h": 37951843.1630488,
                    "percent_change_1h": 0.271623,
                    "percent_change_24h": 0.453701,
                    "percent_change_7d": 16.1297,
                    "market_cap": 79983186.02645117,
                    "last_updated": "2019-11-11T16:35:15.000Z"
                }
            }
        },
        {
            "id": 1274,
            "name": "Waves",
            "symbol": "WAVES",
            "slug": "waves",
            "num_market_pairs": 142,
            "date_added": "2016-06-02T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 100305286,
            "total_supply": 100305286,
            "platform": null,
            "cmc_rank": 68,
            "last_updated": "2019-11-11T16:35:03.000Z",
            "quote": {
                "USD": {
                    "price": 0.778471570674,
                    "volume_24h": 8923266.488719,
                    "percent_change_1h": -0.0471859,
                    "percent_change_24h": -1.91516,
                    "percent_change_7d": -3.14273,
                    "market_cap": 78084813.53932478,
                    "last_updated": "2019-11-11T16:35:03.000Z"
                }
            }
        },
        {
            "id": 2416,
            "name": "THETA",
            "symbol": "THETA",
            "slug": "theta",
            "num_market_pairs": 31,
            "date_added": "2018-01-17T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 870502690,
            "total_supply": 1000000000,
            "platform": null,
            "cmc_rank": 69,
            "last_updated": "2019-11-11T16:35:07.000Z",
            "quote": {
                "USD": {
                    "price": 0.0896594899368,
                    "volume_24h": 852855.525161448,
                    "percent_change_1h": 0.382463,
                    "percent_change_24h": -0.917502,
                    "percent_change_7d": -4.9219,
                    "market_cap": 78048827.17401232,
                    "last_updated": "2019-11-11T16:35:07.000Z"
                }
            }
        },
        {
            "id": 372,
            "name": "Bytecoin",
            "symbol": "BCN",
            "slug": "bytecoin-bcn",
            "num_market_pairs": 11,
            "date_added": "2014-06-17T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 184470000000,
            "circulating_supply": 184066828814.059,
            "total_supply": 184066828814.059,
            "platform": null,
            "cmc_rank": 70,
            "last_updated": "2019-11-11T16:35:01.000Z",
            "quote": {
                "USD": {
                    "price": 0.000407701814151,
                    "volume_24h": 7939.70456663193,
                    "percent_change_1h": 5.81889,
                    "percent_change_24h": 2.50913,
                    "percent_change_7d": 0.579278,
                    "market_cap": 75044380.03251341,
                    "last_updated": "2019-11-11T16:35:01.000Z"
                }
            }
        },
        {
            "id": 463,
            "name": "BitShares",
            "symbol": "BTS",
            "slug": "bitshares",
            "num_market_pairs": 84,
            "date_added": "2014-07-21T00:00:00.000Z",
            "tags": [],
            "max_supply": 3600570502,
            "circulating_supply": 2747770000,
            "total_supply": 2747770000,
            "platform": null,
            "cmc_rank": 71,
            "last_updated": "2019-11-11T16:35:02.000Z",
            "quote": {
                "USD": {
                    "price": 0.0271985133476,
                    "volume_24h": 2274642.33771164,
                    "percent_change_1h": 0.0775103,
                    "percent_change_24h": -3.51672,
                    "percent_change_7d": -6.93023,
                    "market_cap": 74735259.02113485,
                    "last_updated": "2019-11-11T16:35:02.000Z"
                }
            }
        },
        {
            "id": 3155,
            "name": "Quant",
            "symbol": "QNT",
            "slug": "quant",
            "num_market_pairs": 18,
            "date_added": "2018-08-10T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 12072738,
            "total_supply": 14612493.0808262,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x4a220e6096b25eadb88358cb44068a3248254675"
            },
            "cmc_rank": 72,
            "last_updated": "2019-11-11T16:35:11.000Z",
            "quote": {
                "USD": {
                    "price": 6.1844568849,
                    "volume_24h": 24085945.4372751,
                    "percent_change_1h": -0.688569,
                    "percent_change_24h": -6.38598,
                    "percent_change_7d": 0.717969,
                    "market_cap": 74663327.64369386,
                    "last_updated": "2019-11-11T16:35:11.000Z"
                }
            }
        },
        {
            "id": 2405,
            "name": "IOST",
            "symbol": "IOST",
            "slug": "iostoken",
            "num_market_pairs": 81,
            "date_added": "2018-01-16T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 12013965608.8475,
            "total_supply": 21000000000,
            "platform": null,
            "cmc_rank": 73,
            "last_updated": "2019-11-11T16:35:07.000Z",
            "quote": {
                "USD": {
                    "price": 0.00606473300307,
                    "volume_24h": 23573327.0979904,
                    "percent_change_1h": 0.31557,
                    "percent_change_24h": 0.224337,
                    "percent_change_7d": -9.67755,
                    "market_cap": 72861493.7257254,
                    "last_updated": "2019-11-11T16:35:07.000Z"
                }
            }
        },
        {
            "id": 4195,
            "name": "FTX Token",
            "symbol": "FTT",
            "slug": "ftx-token",
            "num_market_pairs": 13,
            "date_added": "2019-07-31T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 52726324.3327723,
            "total_supply": 348598660.4,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9"
            },
            "cmc_rank": 74,
            "last_updated": "2019-11-11T16:35:14.000Z",
            "quote": {
                "USD": {
                    "price": 1.36066016323,
                    "volume_24h": 5971655.31247818,
                    "percent_change_1h": -0.572397,
                    "percent_change_24h": -1.1795,
                    "percent_change_7d": 0.253837,
                    "market_cap": 71742609.07314788,
                    "last_updated": "2019-11-11T16:35:14.000Z"
                }
            }
        },
        {
            "id": 213,
            "name": "MonaCoin",
            "symbol": "MONA",
            "slug": "monacoin",
            "num_market_pairs": 22,
            "date_added": "2014-03-20T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": null,
            "circulating_supply": 65729674.8711679,
            "total_supply": 65729674.8711679,
            "platform": null,
            "cmc_rank": 75,
            "last_updated": "2019-11-11T16:35:01.000Z",
            "quote": {
                "USD": {
                    "price": 1.08911814758,
                    "volume_24h": 586337.939610612,
                    "percent_change_1h": -0.152883,
                    "percent_change_24h": -0.403856,
                    "percent_change_7d": -1.63758,
                    "market_cap": 71587381.73672205,
                    "last_updated": "2019-11-11T16:35:01.000Z"
                }
            }
        },
        {
            "id": 1776,
            "name": "MCO",
            "symbol": "MCO",
            "slug": "crypto-com",
            "num_market_pairs": 59,
            "date_added": "2017-07-03T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 15793831.0949625,
            "total_supply": 31587682.3632061,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xb63b606ac810a52cca15e44bb630fd42d8d1d83d"
            },
            "cmc_rank": 76,
            "last_updated": "2019-11-11T16:35:04.000Z",
            "quote": {
                "USD": {
                    "price": 4.36751455111,
                    "volume_24h": 8889962.34494851,
                    "percent_change_1h": -0.853912,
                    "percent_change_24h": 0.972413,
                    "percent_change_7d": 2.49931,
                    "market_cap": 68979787.1250223,
                    "last_updated": "2019-11-11T16:35:04.000Z"
                }
            }
        },
        {
            "id": 1700,
            "name": "Aeternity",
            "symbol": "AE",
            "slug": "aeternity",
            "num_market_pairs": 52,
            "date_added": "2017-06-01T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": null,
            "circulating_supply": 290509413.5,
            "total_supply": 336330357.49932,
            "platform": null,
            "cmc_rank": 77,
            "last_updated": "2019-11-11T16:35:03.000Z",
            "quote": {
                "USD": {
                    "price": 0.230034231927,
                    "volume_24h": 38792203.9451983,
                    "percent_change_1h": -0.0961695,
                    "percent_change_24h": -2.37467,
                    "percent_change_7d": -7.33792,
                    "market_cap": 66827109.80203575,
                    "last_updated": "2019-11-11T16:35:03.000Z"
                }
            }
        },
        {
            "id": 693,
            "name": "Verge",
            "symbol": "XVG",
            "slug": "verge",
            "num_market_pairs": 58,
            "date_added": "2014-10-25T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 16555000000,
            "circulating_supply": 16044766279.1206,
            "total_supply": 16044766279.1206,
            "platform": null,
            "cmc_rank": 78,
            "last_updated": "2019-11-11T16:35:02.000Z",
            "quote": {
                "USD": {
                    "price": 0.00364987296176,
                    "volume_24h": 1157445.24390121,
                    "percent_change_1h": 0.126995,
                    "percent_change_24h": -2.2363,
                    "percent_change_7d": -6.69286,
                    "market_cap": 58561358.61992088,
                    "last_updated": "2019-11-11T16:35:02.000Z"
                }
            }
        },
        {
            "id": 2830,
            "name": "Seele",
            "symbol": "SEELE",
            "slug": "seele",
            "num_market_pairs": 15,
            "date_added": "2018-05-31T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 696657333.289479,
            "total_supply": 1000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xb1eef147028e9f480dbc5ccaa3277d417d1b85f0"
            },
            "cmc_rank": 79,
            "last_updated": "2019-11-11T16:35:09.000Z",
            "quote": {
                "USD": {
                    "price": 0.0837466406031,
                    "volume_24h": 41383669.3093335,
                    "percent_change_1h": 0.161715,
                    "percent_change_24h": 0.730473,
                    "percent_change_7d": 13.3676,
                    "market_cap": 58342711.31450805,
                    "last_updated": "2019-11-11T16:35:09.000Z"
                }
            }
        },
        {
            "id": 2694,
            "name": "Nexo",
            "symbol": "NEXO",
            "slug": "nexo",
            "num_market_pairs": 23,
            "date_added": "2018-05-01T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 560000011,
            "total_supply": 1000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206"
            },
            "cmc_rank": 80,
            "last_updated": "2019-11-11T16:35:08.000Z",
            "quote": {
                "USD": {
                    "price": 0.104081113956,
                    "volume_24h": 9512817.24492296,
                    "percent_change_1h": 0.539997,
                    "percent_change_24h": 1.42869,
                    "percent_change_7d": 0.814158,
                    "market_cap": 58285424.960252255,
                    "last_updated": "2019-11-11T16:35:08.000Z"
                }
            }
        },
        {
            "id": 1637,
            "name": "iExec RLC",
            "symbol": "RLC",
            "slug": "rlc",
            "num_market_pairs": 15,
            "date_added": "2017-04-20T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 80070793.2387674,
            "total_supply": 86999784.9868455,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x607f4c5bb672230e8672085532f7e901544a7375"
            },
            "cmc_rank": 81,
            "last_updated": "2019-11-11T16:35:03.000Z",
            "quote": {
                "USD": {
                    "price": 0.716266313892,
                    "volume_24h": 3967091.86524276,
                    "percent_change_1h": 3.2605,
                    "percent_change_24h": 13.1045,
                    "percent_change_7d": 9.67674,
                    "market_cap": 57352011.923540406,
                    "last_updated": "2019-11-11T16:35:03.000Z"
                }
            }
        },
        {
            "id": 291,
            "name": "MaidSafeCoin",
            "symbol": "MAID",
            "slug": "maidsafecoin",
            "num_market_pairs": 6,
            "date_added": "2014-04-28T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 452552412,
            "total_supply": 452552412,
            "platform": {
                "id": 83,
                "name": "Omni",
                "symbol": "OMNI",
                "slug": "omni",
                "token_address": "3"
            },
            "cmc_rank": 82,
            "last_updated": "2019-11-11T16:35:01.000Z",
            "quote": {
                "USD": {
                    "price": 0.125467384932,
                    "volume_24h": 525449.940576946,
                    "percent_change_1h": 0.698805,
                    "percent_change_24h": -4.79273,
                    "percent_change_7d": -4.75567,
                    "market_cap": 56780567.67830905,
                    "last_updated": "2019-11-11T16:35:01.000Z"
                }
            }
        },
        {
            "id": 3218,
            "name": "Energi",
            "symbol": "NRG",
            "slug": "energi",
            "num_market_pairs": 6,
            "date_added": "2018-08-23T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": null,
            "circulating_supply": 22561867.8599914,
            "total_supply": 22561867.8599914,
            "platform": null,
            "cmc_rank": 83,
            "last_updated": "2019-11-11T16:35:11.000Z",
            "quote": {
                "USD": {
                    "price": 2.36637927177,
                    "volume_24h": 491167.06616913,
                    "percent_change_1h": 2.15366,
                    "percent_change_24h": -0.653346,
                    "percent_change_7d": -6.07544,
                    "market_cap": 53389936.436297424,
                    "last_updated": "2019-11-11T16:35:11.000Z"
                }
            }
        },
        {
            "id": 1320,
            "name": "Ardor",
            "symbol": "ARDR",
            "slug": "ardor",
            "num_market_pairs": 25,
            "date_added": "2016-07-23T00:00:00.000Z",
            "tags": [],
            "max_supply": 998999495,
            "circulating_supply": 998999495,
            "total_supply": 998999495,
            "platform": null,
            "cmc_rank": 84,
            "last_updated": "2019-11-11T16:35:02.000Z",
            "quote": {
                "USD": {
                    "price": 0.0533704188115,
                    "volume_24h": 2511860.60473772,
                    "percent_change_1h": -0.245718,
                    "percent_change_24h": -2.46975,
                    "percent_change_7d": -6.12698,
                    "market_cap": 53317021.440627,
                    "last_updated": "2019-11-11T16:35:02.000Z"
                }
            }
        },
        {
            "id": 3673,
            "name": "BitMax Token",
            "symbol": "BTMX",
            "slug": "bitmax-token",
            "num_market_pairs": 5,
            "date_added": "2019-01-08T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 787683608,
            "total_supply": 787683608,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x1c289a12a8552b314d0d153d6991fd27a54aa640"
            },
            "cmc_rank": 85,
            "last_updated": "2019-11-11T16:35:13.000Z",
            "quote": {
                "USD": {
                    "price": 0.0675050501957,
                    "volume_24h": 2667424.33406593,
                    "percent_change_1h": -0.537227,
                    "percent_change_24h": -0.884176,
                    "percent_change_7d": -3.55381,
                    "market_cap": 53172621.49637008,
                    "last_updated": "2019-11-11T16:35:13.000Z"
                }
            }
        },
        {
            "id": 3701,
            "name": "RIF Token",
            "symbol": "RIF",
            "slug": "rif-token",
            "num_market_pairs": 17,
            "date_added": "2019-01-16T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 536980014.838103,
            "total_supply": 1000000000,
            "platform": {
                "id": 3626,
                "name": "RSK Smart Bitcoin",
                "symbol": "RBTC",
                "slug": "rsk-smart-bitcoin",
                "token_address": "0x2acc95758f8b5f583470ba265eb685a8f45fc9d5"
            },
            "cmc_rank": 86,
            "last_updated": "2019-11-11T16:35:13.000Z",
            "quote": {
                "USD": {
                    "price": 0.0964422120027,
                    "volume_24h": 35078119.1622251,
                    "percent_change_1h": 0.323004,
                    "percent_change_24h": 0.303681,
                    "percent_change_7d": -6.46371,
                    "market_cap": 51787540.43222933,
                    "last_updated": "2019-11-11T16:35:13.000Z"
                }
            }
        },
        {
            "id": 2469,
            "name": "Zilliqa",
            "symbol": "ZIL",
            "slug": "zilliqa",
            "num_market_pairs": 108,
            "date_added": "2018-01-25T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": null,
            "circulating_supply": 8687360058.0875,
            "total_supply": 12533042434.6081,
            "platform": null,
            "cmc_rank": 87,
            "last_updated": "2019-11-11T16:35:07.000Z",
            "quote": {
                "USD": {
                    "price": 0.00575729472295,
                    "volume_24h": 6833800.61133452,
                    "percent_change_1h": 0.114571,
                    "percent_change_24h": -3.61091,
                    "percent_change_7d": -5.9325,
                    "market_cap": 50015692.218793765,
                    "last_updated": "2019-11-11T16:35:07.000Z"
                }
            }
        },
        {
            "id": 2130,
            "name": "Enjin Coin",
            "symbol": "ENJ",
            "slug": "enjin-coin",
            "num_market_pairs": 52,
            "date_added": "2017-11-01T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 784614641.564264,
            "total_supply": 1000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c"
            },
            "cmc_rank": 88,
            "last_updated": "2019-11-11T16:35:05.000Z",
            "quote": {
                "USD": {
                    "price": 0.0620108445001,
                    "volume_24h": 58030598.4625165,
                    "percent_change_1h": -0.0982963,
                    "percent_change_24h": -2.07542,
                    "percent_change_7d": -7.23136,
                    "market_cap": 48654616.530543275,
                    "last_updated": "2019-11-11T16:35:05.000Z"
                }
            }
        },
        {
            "id": 1230,
            "name": "Steem",
            "symbol": "STEEM",
            "slug": "steem",
            "num_market_pairs": 33,
            "date_added": "2016-04-18T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 350722471.651,
            "total_supply": 367696565.651,
            "platform": null,
            "cmc_rank": 89,
            "last_updated": "2019-11-11T16:35:02.000Z",
            "quote": {
                "USD": {
                    "price": 0.138173622112,
                    "volume_24h": 332075.129725191,
                    "percent_change_1h": -0.021146,
                    "percent_change_24h": -2.87966,
                    "percent_change_7d": -7.60531,
                    "market_cap": 48460594.26409191,
                    "last_updated": "2019-11-11T16:35:02.000Z"
                }
            }
        },
        {
            "id": 4066,
            "name": "Chiliz",
            "symbol": "CHZ",
            "slug": "chiliz",
            "num_market_pairs": 10,
            "date_added": "2019-07-01T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 3762769182,
            "total_supply": 8888888888,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x3506424f91fd33084466f402d5d97f05f8e3b4af"
            },
            "cmc_rank": 90,
            "last_updated": "2019-11-11T16:35:14.000Z",
            "quote": {
                "USD": {
                    "price": 0.0128296151786,
                    "volume_24h": 4906467.59086071,
                    "percent_change_1h": -0.797271,
                    "percent_change_24h": -1.71584,
                    "percent_change_7d": -28.0702,
                    "market_cap": 48274880.61095551,
                    "last_updated": "2019-11-11T16:35:14.000Z"
                }
            }
        },
        {
            "id": 1759,
            "name": "Status",
            "symbol": "SNT",
            "slug": "status",
            "num_market_pairs": 90,
            "date_added": "2017-06-28T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 3470483788,
            "total_supply": 6804870174,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x744d70fdbe2ba4cf95131626614a1763df805b9e"
            },
            "cmc_rank": 91,
            "last_updated": "2019-11-11T16:35:04.000Z",
            "quote": {
                "USD": {
                    "price": 0.0129246338948,
                    "volume_24h": 211424380.681882,
                    "percent_change_1h": -0.192844,
                    "percent_change_24h": -2.24828,
                    "percent_change_7d": -4.73202,
                    "market_cap": 44854732.397738695,
                    "last_updated": "2019-11-11T16:35:04.000Z"
                }
            }
        },
        {
            "id": 2539,
            "name": "Ren",
            "symbol": "REN",
            "slug": "ren",
            "num_market_pairs": 18,
            "date_added": "2018-02-21T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 800503651.320919,
            "total_supply": 1000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x408e41876cccdc0f92210600ef50372656052a38"
            },
            "cmc_rank": 92,
            "last_updated": "2019-11-11T16:35:07.000Z",
            "quote": {
                "USD": {
                    "price": 0.0558331786951,
                    "volume_24h": 3514750.96343669,
                    "percent_change_1h": 0.243427,
                    "percent_change_24h": -1.23469,
                    "percent_change_7d": 8.31236,
                    "market_cap": 44694663.4102809,
                    "last_updated": "2019-11-11T16:35:07.000Z"
                }
            }
        },
        {
            "id": 1455,
            "name": "Golem",
            "symbol": "GNT",
            "slug": "golem-network-tokens",
            "num_market_pairs": 103,
            "date_added": "2016-11-18T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 980050000,
            "total_supply": 1000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xa74476443119A942dE498590Fe1f2454d7D4aC0d"
            },
            "cmc_rank": 93,
            "last_updated": "2019-11-11T16:35:03.000Z",
            "quote": {
                "USD": {
                    "price": 0.045285918808,
                    "volume_24h": 4830448.28995513,
                    "percent_change_1h": -0.644715,
                    "percent_change_24h": -4.87723,
                    "percent_change_7d": -2.88923,
                    "market_cap": 44382464.7277804,
                    "last_updated": "2019-11-11T16:35:03.000Z"
                }
            }
        },
        {
            "id": 2299,
            "name": "aelf",
            "symbol": "ELF",
            "slug": "aelf",
            "num_market_pairs": 80,
            "date_added": "2017-12-21T00:00:00.000Z",
            "tags": [],
            "max_supply": 1000000000,
            "circulating_supply": 544480199.986466,
            "total_supply": 879999999.986466,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xbf2179859fc6d5bee9bf9158632dc51678a4100e"
            },
            "cmc_rank": 94,
            "last_updated": "2019-11-11T16:35:06.000Z",
            "quote": {
                "USD": {
                    "price": 0.0804499791317,
                    "volume_24h": 9222328.81617238,
                    "percent_change_1h": -0.215137,
                    "percent_change_24h": -3.3078,
                    "percent_change_7d": -11.4822,
                    "market_cap": 43803420.72653504,
                    "last_updated": "2019-11-11T16:35:06.000Z"
                }
            }
        },
        {
            "id": 2447,
            "name": "Crypterium",
            "symbol": "CRPT",
            "slug": "crpt",
            "num_market_pairs": 9,
            "date_added": "2018-01-22T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 84787740.0000001,
            "total_supply": 99785291.1428572,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x80a7e048f37a50500351c204cb407766fa3bae7f"
            },
            "cmc_rank": 95,
            "last_updated": "2019-11-11T16:35:07.000Z",
            "quote": {
                "USD": {
                    "price": 0.515671387746,
                    "volume_24h": 279805.393603162,
                    "percent_change_1h": 1.04099,
                    "percent_change_24h": 1.475,
                    "percent_change_7d": -9.55843,
                    "market_cap": 43722611.549647085,
                    "last_updated": "2019-11-11T16:35:07.000Z"
                }
            }
        },
        {
            "id": 3617,
            "name": "ILCoin",
            "symbol": "ILC",
            "slug": "ilcoin",
            "num_market_pairs": 26,
            "date_added": "2018-11-26T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 2500000000,
            "circulating_supply": 333177487.348547,
            "total_supply": 1286873907.41313,
            "platform": null,
            "cmc_rank": 96,
            "last_updated": "2019-11-11T16:35:13.000Z",
            "quote": {
                "USD": {
                    "price": 0.127898053123,
                    "volume_24h": 674545.093547543,
                    "percent_change_1h": -0.812235,
                    "percent_change_24h": -1.01139,
                    "percent_change_7d": -2.89159,
                    "market_cap": 42612751.976292126,
                    "last_updated": "2019-11-11T16:35:13.000Z"
                }
            }
        },
        {
            "id": 3871,
            "name": "Newton",
            "symbol": "NEW",
            "slug": "newton",
            "num_market_pairs": 12,
            "date_added": "2019-04-17T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": null,
            "circulating_supply": 11948333332,
            "total_supply": 100000000000,
            "platform": null,
            "cmc_rank": 97,
            "last_updated": "2019-11-11T16:35:14.000Z",
            "quote": {
                "USD": {
                    "price": 0.00353528520131,
                    "volume_24h": 4641094.16909546,
                    "percent_change_1h": 0.147052,
                    "percent_change_24h": -0.485936,
                    "percent_change_7d": -2.87739,
                    "market_cap": 42240766.0089386,
                    "last_updated": "2019-11-11T16:35:14.000Z"
                }
            }
        },
        {
            "id": 2603,
            "name": "Pundi X",
            "symbol": "NPXS",
            "slug": "pundi-x",
            "num_market_pairs": 70,
            "date_added": "2018-03-22T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 234162817276.377,
            "total_supply": 259810708832.63,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3"
            },
            "cmc_rank": 98,
            "last_updated": "2019-11-11T16:35:08.000Z",
            "quote": {
                "USD": {
                    "price": 0.000178960222974,
                    "volume_24h": 736000.651042031,
                    "percent_change_1h": -0.0710206,
                    "percent_change_24h": -2.39814,
                    "percent_change_7d": -6.11899,
                    "market_cap": 41905829.99200045,
                    "last_updated": "2019-11-11T16:35:08.000Z"
                }
            }
        },
        {
            "id": 1414,
            "name": "Zcoin",
            "symbol": "XZC",
            "slug": "zcoin",
            "num_market_pairs": 42,
            "date_added": "2016-10-06T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 21400000,
            "circulating_supply": 8785243.32977799,
            "total_supply": 21400000,
            "platform": null,
            "cmc_rank": 99,
            "last_updated": "2019-11-11T16:35:03.000Z",
            "quote": {
                "USD": {
                    "price": 4.73724794233,
                    "volume_24h": 4401363.6455261,
                    "percent_change_1h": -0.192811,
                    "percent_change_24h": -3.86094,
                    "percent_change_7d": -3.45984,
                    "market_cap": 41617875.886859134,
                    "last_updated": "2019-11-11T16:35:03.000Z"
                }
            }
        },
        {
            "id": 3721,
            "name": "Huobi Pool Token",
            "symbol": "HPT",
            "slug": "huobi-pool-token",
            "num_market_pairs": 9,
            "date_added": "2019-02-01T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 5076332935.72,
            "total_supply": 9929432936.18,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xa66Daa57432024023DB65477BA87D4E7F5f95213"
            },
            "cmc_rank": 100,
            "last_updated": "2019-11-11T16:35:13.000Z",
            "quote": {
                "USD": {
                    "price": 0.00779898791208,
                    "volume_24h": 1980988.57222001,
                    "percent_change_1h": -0.133748,
                    "percent_change_24h": -3.08318,
                    "percent_change_7d": -4.1299,
                    "market_cap": 39590259.203373864,
                    "last_updated": "2019-11-11T16:35:13.000Z"
                }
            }
        }
    ]
}

res['data'].each do |crypto|
            result[crypto['symbol']] = crypto
end

json.set! :assets do 
    json.merge! result
end
