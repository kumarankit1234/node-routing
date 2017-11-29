module.exports = {
    data: {
        total: 50,
        domains: [
            {
                id: 108,
                name: 'facebook.com',
                notes: null,
                lastUsed: null,
                registrationDate: 859573800,
                expirationDate: 1743273000,
                expireIn: 2678,
                blacklistUpdate: 1511932804,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [
                    'Domain A record must point to VPS IP(139.59.93.107)',
                    'Domain A record must point to VPS IP(139.59.93.107)',
                    'Domain A record must point to VPS IP(139.59.93.107)'
                ],
                a: ['31.13.69.228'],
                mx: [{exchange: 'msgin.vvv.facebook.com', preference: 10}],
                ns: ['a.ns.facebook.com', 'b.ns.facebook.com'],
                spf: [
                    'v=spf1 redirect=_spf.facebook.com',
                    'v=spf1 ip4:69.63.179.25 ip4:69.63.178.128/25 ip4:69.63.184.0/25 ip4:66.220.144.128/25 ip4:66.220.155.0/24 ip4:69.171.232.0/24 i,p4:66.220.157.0/25 ip4:69.171.244.0/24 mx -all'
                ]
            },
            {
                id: 109,
                name: 'gmail.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511932804,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: ['Domain A record must point to VPS IP(139.59.93.107)'],
                a: ['172.217.13.69'],
                mx: [
                    {
                        exchange: 'alt1.gmail-smtp-in.l.google.com',
                        preference: 10
                    },
                    {
                        exchange: 'alt2.gmail-smtp-in.l.google.com',
                        preference: 20
                    },
                    {exchange: 'gmail-smtp-in.l.google.com', preference: 5},
                    {
                        exchange: 'alt4.gmail-smtp-in.l.google.com',
                        preference: 40
                    },
                    {
                        exchange: 'alt3.gmail-smtp-in.l.google.com',
                        preference: 30
                    }
                ],
                ns: [
                    'ns1.google.com',
                    'ns4.google.com',
                    'ns2.google.com',
                    'ns3.google.com'
                ],
                spf: [
                    'v=spf1 redirect=_spf.google.com',
                    'v=spf1 include:_netblocks.google.com include:_netblocks2.google.com include:_netblocks3.google.com ~all',
                    'v=spf1 ip4:64.18.0.0/20 ip4:64.233.160.0/19 ip4:66.102.0.0/20 ip4:66.249.80.0/20 ip4:72.14.192.0/18 ip4:74.125.0.0/16 ip4:108.177.8.0/21 ip4:173.194.0.0/16 ip4:207.126.144.0/20 ip4:209.85.128.0/17 ip4:216.58.192.0/19 ip4:216.239.32.0/19 ~all',
                    'v=spf1 ip6:2001:4860:4000::/36 ip6:2404:6800:4000::/36 ip6:2607:f8b0:4000::/36 ip6:2800:3f0:4000::/36 ip6:2a00:1450:4000::/36 ip6:2c0f:fb50:4000::/36 ~all',
                    'v=spf1 ip4:172.217.0.0/19 ip4:108.177.96.0/19 ~all'
                ]
            },
            {
                id: 110,
                name: 'google.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511932804,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: ['Domain A record must point to VPS IP(139.59.93.107)'],
                a: ['172.217.13.78'],
                mx: [
                    {exchange: 'aspmx.l.google.com', preference: 10},
                    {exchange: 'alt4.aspmx.l.google.com', preference: 50},
                    {exchange: 'alt3.aspmx.l.google.com', preference: 40},
                    {exchange: 'alt1.aspmx.l.google.com', preference: 20},
                    {exchange: 'alt2.aspmx.l.google.com', preference: 30}
                ],
                ns: [
                    'ns1.google.com',
                    'ns3.google.com',
                    'ns4.google.com',
                    'ns2.google.com'
                ],
                spf: [
                    'v=spf1 include:_spf.google.com ~all',
                    'v=spf1 include:_netblocks.google.com include:_netblocks2.google.com include:_netblocks3.google.com ~all',
                    'v=spf1 ip4:64.18.0.0/20 ip4:64.233.160.0/19 ip4:66.102.0.0/20 ip4:66.249.80.0/20 ip4:72.14.192.0/18 ip4:74.125.0.0/16 ip4:108.177.8.0/21 ip4:173.194.0.0/16 ip4:207.126.144.0/20 ip4:209.85.128.0/17 ip4:216.58.192.0/19 ip4:216.239.32.0/19 ~all',
                    'v=spf1 ip6:2001:4860:4000::/36 ip6:2404:6800:4000::/36 ip6:2607:f8b0:4000::/36 ip6:2800:3f0:4000::/36 ip6:2a00:1450:4000::/36 ip6:2c0f:fb50:4000::/36 ~all',
                    'v=spf1 ip4:172.217.0.0/19 ip4:108.177.96.0/19 ~all'
                ]
            },
            {
                id: 128,
                name: 'add3.test.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511932804,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: ['Domain A record must point to VPS IP(139.59.93.107)'],
                a: ['69.172.200.109'],
                mx: null,
                ns: null,
                spf: ['v=spf1 ~all', 'v=spf1 ~all']
            },
            {
                id: 129,
                name: 'one.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511932804,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: ['Domain A record must point to VPS IP(139.59.93.107)'],
                a: ['46.30.211.34', '46.30.211.35'],
                mx: [
                    {exchange: 'mxcluster1.one.com', preference: 10},
                    {exchange: 'mxcluster2.one.com', preference: 10}
                ],
                ns: ['a.b-one-dns.net', 'b.b-one-dns.net'],
                spf: [
                    'v=spf1 include:_spf.one.com include:spf.mail.intercom.io include:mail.zendesk.com include:spf.mandrillapp.com include:servers.mcsv.net ~all',
                    'v=spf1 ip4:195.47.247.0/24 ip4:91.198.169.0/24 ip4:193.202.110.0/24 ip4:46.30.208.0/21 ip4:104.37.32.0/21 ip4:185.164.14.0/24 include:_supportspf.one.com ~all',
                    'v=spf1 a:mails.liveperson.net ip4:208.89.13.232/29 ~all',
                    'v=spf1 ip4:166.78.71.244 ip4:192.237.159.39 ip4:166.78.71.243 ip4:192.237.159.45 ip4:104.130.122.36 ip4:192.237.159.23 ip4:192.237.159.22 ip4:192.237.159.38 ip4:104.130.122.37 ip4:192.237.159.72 ~all',
                    'v=spf1 ip4:192.161.144.0/20 ip4:185.12.80.0/22 ip4:96.46.150.192/27 ip4:174.137.46.0/24 ip4:188.172.128.0/20 ip4:216.198.0.0/18 ~all',
                    'v=spf1 ip4:198.2.128.0/24 ip4:198.2.132.0/22 ip4:198.2.136.0/23 ip4:198.2.186.0/23 ip4:205.201.131.128/25 ip4:205.201.134.128/25 ip4:205.201.136.0/23 ip4:205.201.139.0/24 ip4:198.2.180.0/24 ip4:198.2.179.0/24 ip4:198.2.178.0/24 ip4:198.2.177.0/24 ~all',
                    'v=spf1 ip4:205.201.128.0/20 ip4:198.2.128.0/18 ip4:148.105.8.0/21 ?all'
                ]
            },
            {
                id: 130,
                name: 'two.com',
                notes: null,
                lastUsed: null,
                registrationDate: 947529000,
                expirationDate: 1610303400,
                expireIn: 1139,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: ['Domain A record must point to VPS IP(139.59.20.196)'],
                a: ['141.8.226.66'],
                mx: null,
                ns: ['dns2.stabletransit.com', 'dns1.stabletransit.com'],
                spf: null
            },
            {
                id: 131,
                name: 'three.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511932804,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: ['Domain A record must point to VPS IP(139.59.93.107)'],
                a: ['203.129.89.231'],
                mx: [{exchange: 'mail.drei.at', preference: 10}],
                ns: [
                    'ns3.domainnetwork.com',
                    'ns2.domainnetwork.se',
                    'ns.domainnetwork.se'
                ],
                spf: null
            },
            {
                id: 132,
                name: 'apple.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511932804,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: ['Domain A record must point to VPS IP(139.59.93.107)'],
                a: ['17.172.224.47', '17.178.96.59', '17.142.160.59'],
                mx: [
                    {exchange: 'nwk-aaemail-lapp03.apple.com', preference: 10},
                    {exchange: 'nwk-aaemail-lapp02.apple.com', preference: 10},
                    {exchange: 'nwk-aaemail-lapp01.apple.com', preference: 10},
                    {
                        exchange: 'ma1-aaemail-dr-lapp03.apple.com',
                        preference: 10
                    },
                    {
                        exchange: 'ma1-aaemail-dr-lapp02.apple.com',
                        preference: 10
                    },
                    {
                        exchange: 'ma1-aaemail-dr-lapp01.apple.com',
                        preference: 10
                    }
                ],
                ns: [
                    'nserver5.apple.com',
                    'a.ns.apple.com',
                    'd.ns.apple.com',
                    'e.ns.apple.com',
                    'b.ns.apple.com',
                    'f.ns.apple.com',
                    'c.ns.apple.com',
                    'nserver6.apple.com'
                ],
                spf: ['v=spf1 ip4:17.0.0.0/8 -all']
            },
            {
                id: 133,
                name: 'microsoft.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511932804,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: ['Domain A record must point to VPS IP(139.59.93.107)'],
                a: [
                    '23.96.52.53',
                    '191.239.213.197',
                    '104.40.211.35',
                    '104.43.195.251',
                    '23.100.122.175'
                ],
                mx: [
                    {
                        exchange: 'microsoft-com.mail.protection.outlook.com',
                        preference: 10
                    }
                ],
                ns: [
                    'ns2.msft.net',
                    'ns3.msft.net',
                    'ns4.msft.net',
                    'ns1.msft.net'
                ],
                spf: null
            },
            {
                id: 134,
                name: 'pixar.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511932804,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: ['Domain A record must point to VPS IP(139.59.93.107)'],
                a: [
                    '198.185.159.145',
                    '198.185.159.144',
                    '198.49.23.145',
                    '198.49.23.144'
                ],
                mx: [
                    {exchange: 'aspmx.l.google.com', preference: 1},
                    {exchange: 'alt1.aspmx.l.google.com', preference: 5},
                    {exchange: 'alt4.aspmx.l.google.com', preference: 10},
                    {exchange: 'alt3.aspmx.l.google.com', preference: 10},
                    {exchange: 'alt2.aspmx.l.google.com', preference: 5}
                ],
                ns: [
                    'knick.pixar.com',
                    'andre.pixar.com',
                    'knack.pixar.com',
                    'wallyb.pixar.com'
                ],
                spf: null
            },
            {
                id: 135,
                name: 'nasa.gov',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511932804,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: ['Domain A record must point to VPS IP(139.59.93.107)'],
                a: ['52.0.14.116'],
                mx: [
                    {exchange: 'ndmsvnpf104.ndc.nasa.gov', preference: 10},
                    {exchange: 'ndmsvnpf103.ndc.nasa.gov', preference: 10},
                    {exchange: 'ndjsvnpf102.ndc.nasa.gov', preference: 10},
                    {exchange: 'ndjsvnpf103.ndc.nasa.gov', preference: 10},
                    {exchange: 'ndmsvnpf102.ndc.nasa.gov', preference: 10},
                    {exchange: 'ndmsvnpf101.ndc.nasa.gov', preference: 10},
                    {exchange: 'ndjsvnpf101.ndc.nasa.gov', preference: 10},
                    {exchange: 'ndjsvnpf104.ndc.nasa.gov', preference: 10}
                ],
                ns: ['ns3.nasa.gov', 'ns1.nasa.gov', 'ns2.nasa.gov'],
                spf: [
                    'v=spf1 mx include:_spf-ip4a.nasa.gov include:_spf-ip4b.nasa.gov include:_spf-ip4c.nasa.gov include:_spf-ip4g.nasa.gov include:_spf-ip4m.nasa.gov include:_spf-ip4x.nasa.gov include:_spf-ip6a.nasa.gov -all',
                    'v=spf1 ip4:198.117.0.90 ip4:198.117.1.89 ip4:198.117.0.161 ip4:198.117.0.162 ip4:198.117.1.161 ip4:198.117.1.162 -all',
                    'v=spf1 ip4:128.102.12.121 ip4:128.102.12.122 ip4:130.134.81.136 ip4:130.134.81.137 ip4:128.156.250.70 ip4:128.156.250.71 ip4:128.183.245.24 ip4:128.183.245.25 -all',
                    'v=spf1 ip4:128.157.183.13 ip4:128.157.183.14 ip4:198.117.132.19 ip4:148.114.252.16 ip4:198.116.134.103 ip4:198.116.134.104 ip4:128.159.63.152 ip4:128.159.63.153 -all',
                    'v=spf1 ip4:128.183.210.99 ip4:169.154.216.33 ip4:169.154.217.17 ip4:128.183.16.133 ip4:128.183.16.143 ip4:128.183.96.236 ip4:169.154.156.35 ip4:169.154.156.36 ip4:128.183.31.23 -all',
                    'v=spf1 ip4:129.165.41.104 ip4:129.165.43.104 ip4:129.165.92.46 ip4:129.165.92.62 ip4:129.165.43.118 ip4:129.165.41.118 ip4:129.165.43.119 ip4:129.165.43.120 ip4:150.144.200.16 ip4:150.144.200.48 -all',
                    'v=spf1 ip4:198.116.65.188 ip4:198.119.134.205 ip4:128.156.249.229 ip4:128.149.137.96 ip4:128.149.139.105 ip4:128.149.139.106 ip4:128.149.139.109 ip4:169.154.146.140 ip4:169.154.146.141 ip4:129.164.30.24 -all',
                    'v=spf1 ip6:2001:4d0:8302:1100::151 ip6:2001:4d0:8302:1100::152 ip6:2001:4d0:8302:1100::153 ip6:2001:4d0:8302:1100::154 ip6:2001:4d0:a302:1100::151 ip6:2001:4d0:a302:1100::152 ip6:2001:4d0:a302:1100::153 ip6:2001:4d0:a302:1100::154  -all'
                ]
            },
            {
                id: 136,
                name: 'aliexpress.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511932804,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: ['Domain A record must point to VPS IP(139.59.93.107)'],
                a: ['198.11.132.250'],
                mx: [{exchange: 'mx2.mail.aliyun.com', preference: 10}],
                ns: [
                    'ns8.alibabaonline.com',
                    'nshz.alibabaonline.com',
                    'nsp.alibabaonline.com',
                    'nsp2.alibabaonline.com'
                ],
                spf: [
                    'v=spf1 include:spf1.service.alibaba.com include:spf2.service.alibaba.com include:spf2.ocm.aliyun.com -all',
                    'v=spf1 ip4:115.124.18.0/23 ip4:110.75.46.0/23 ip4:121.0.18.0/20 ip4:110.75.160.0/19 ip4:42.120.70.0/23 ip4:115.124.30.0/24 ip4:47.88.44.32/27 ip4:110.75.192.0/19 ip4:42.120.163.0/24 ip4:110.75.141.129/27 ip4:110.75.145.129/27 -all',
                    'v=spf1 ip4:42.156.224.1/25 ip4:42.156.225.1/25 -all',
                    'v=spf1 ip4:115.124.24.0/23 ip4:115.124.26.0/24 ip4:140.205.210.0/23 ip4:198.11.131.0/27 ip4:198.11.135.0/24 ip4:47.88.45.0/24 -all'
                ]
            },
            {
                id: 137,
                name: 'beautifullife.info',
                notes: null,
                lastUsed: null,
                registrationDate: 1143052200,
                expirationDate: 1553279400,
                expireIn: 479,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: ['108.59.8.204'],
                mx: [
                    {exchange: 'mail.beautifullife.info', preference: 20},
                    {exchange: 'mail.beautifullife.info', preference: 10}
                ],
                ns: ['ns2.hosting3.dashost.com', 'ns1.hosting3.dashost.com'],
                spf: [
                    'v=spf1 include:_spf.mlsend.com ip4:91.109.22.76 ip4:178.62.203.179 ip4:34.231.248.62 a mx ~all',
                    'v=spf1 include:_netblocks.mlsend.com ~all',
                    'v=spf1 ip4:92.61.38.0/24 ip4:31.193.196.0/24 ip4:31.193.193.0/24 ip4:195.12.186.0/24 ip4:31.193.199.0/24 ip4:185.79.247.64/27 ip4:185.38.167.176/28 ~all'
                ]
            },
            {
                id: 138,
                name: 'mrck.site',
                notes: null,
                lastUsed: null,
                registrationDate: 1448994600,
                expirationDate: 1512153000,
                expireIn: 3,
                blacklistUpdate: 1511928605,
                blacklistDetails: [
                    {url: null, name: 'symantec', lastUpdated: 1482085800}
                ],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 1},
                    {checkedAt: 1511481600000, count: 1},
                    {checkedAt: 1511568000000, count: 1},
                    {checkedAt: 1511654400000, count: 1},
                    {checkedAt: 1511740800000, count: 1},
                    {checkedAt: 1511827200000, count: 1},
                    {checkedAt: 1511913600000, count: 1}
                ],
                status: 'invalid',
                errors: ['', 'Domain is blacklisted'],
                a: null,
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 139,
                name: 'abc.com',
                notes: null,
                lastUsed: null,
                registrationDate: 832703400,
                expirationDate: 1527013800,
                expireIn: 175,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: ['Domain A record must point to VPS IP(139.59.80.60)'],
                a: ['199.181.132.250'],
                mx: [
                    {exchange: 'cluster6.us.messagelabs.com', preference: 5},
                    {exchange: 'cluster6a.us.messagelabs.com', preference: 20}
                ],
                ns: [
                    'orns01.dig.com',
                    'orns02.dig.com',
                    'sens01.dig.com',
                    'sens02.dig.com'
                ],
                spf: null
            },
            {
                id: 141,
                name: 'rutpqyspgo.com',
                notes: null,
                lastUsed: null,
                registrationDate: 1495132200,
                expirationDate: 1526668200,
                expireIn: 171,
                blacklistUpdate: 1511929803,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: ['139.59.80.60'],
                mx: [
                    {
                        exchange: 'eforward2.registrar-servers.com',
                        preference: 10
                    },
                    {
                        exchange: 'eforward4.registrar-servers.com',
                        preference: 15
                    },
                    {
                        exchange: 'eforward5.registrar-servers.com',
                        preference: 20
                    },
                    {
                        exchange: 'eforward3.registrar-servers.com',
                        preference: 10
                    },
                    {
                        exchange: 'eforward1.registrar-servers.com',
                        preference: 10
                    }
                ],
                ns: [
                    'dns1.registrar-servers.com',
                    'dns2.registrar-servers.com'
                ],
                spf: [
                    'v=spf1 include:spf.efwd.registrar-servers.com ~all',
                    'v=spf1 ip4:38.101.213.192/28 ip4:209.105.246.192/28 ip4:199.229.254.192/27 ip4:198.54.122.192/26 ip4:162.255.118.0/26 ip4:198.54.122.0/28 ip4:162.255.118.240/29 ?all'
                ]
            },
            {
                id: 142,
                name: 'add.com',
                notes: null,
                lastUsed: null,
                registrationDate: 773605800,
                expirationDate: 1594060200,
                expireIn: 951,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: ['69.172.201.153'],
                mx: null,
                ns: [
                    'ns2.uniregistrymarket.link',
                    'ns1.uniregistrymarket.link'
                ],
                spf: null
            },
            {
                id: 143,
                name: 'add3.com',
                notes: null,
                lastUsed: null,
                registrationDate: 1053282600,
                expirationDate: 1621362600,
                expireIn: 1267,
                blacklistUpdate: 1511932804,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: ['162.144.85.198'],
                mx: [
                    {exchange: 'alt1.aspmx.l.google.com', preference: 5},
                    {exchange: 'alt2.aspmx.l.google.com', preference: 5},
                    {exchange: 'aspmx.l.google.com', preference: 1},
                    {exchange: 'aspmx2.googlemail.com', preference: 10},
                    {exchange: 'aspmx3.googlemail.com', preference: 10}
                ],
                ns: ['ns50.domaincontrol.com', 'ns49.domaincontrol.com'],
                spf: [
                    'v=spf1 include:_spf.google.com ~all',
                    'v=spf1 include:_netblocks.google.com include:_netblocks2.google.com include:_netblocks3.google.com ~all',
                    'v=spf1 ip4:64.18.0.0/20 ip4:64.233.160.0/19 ip4:66.102.0.0/20 ip4:66.249.80.0/20 ip4:72.14.192.0/18 ip4:74.125.0.0/16 ip4:108.177.8.0/21 ip4:173.194.0.0/16 ip4:207.126.144.0/20 ip4:209.85.128.0/17 ip4:216.58.192.0/19 ip4:216.239.32.0/19 ~all',
                    'v=spf1 ip6:2001:4860:4000::/36 ip6:2404:6800:4000::/36 ip6:2607:f8b0:4000::/36 ip6:2800:3f0:4000::/36 ip6:2a00:1450:4000::/36 ip6:2c0f:fb50:4000::/36 ~all',
                    'v=spf1 ip4:172.217.0.0/19 ip4:108.177.96.0/19 ~all'
                ]
            },
            {
                id: 152,
                name: 'add2.test.com',
                notes: 'Notes',
                lastUsed: null,
                registrationDate: 866572200,
                expirationDate: 1560709800,
                expireIn: 565,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'valid',
                errors: [],
                a: ['69.172.200.109'],
                mx: null,
                ns: null,
                spf: ['v=spf1 ~all', 'v=spf1 ~all']
            },
            {
                id: 154,
                name: 'www.mailtechdemo.com',
                notes: 'Mailtechdemo',
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [
                    'Can not fetch DNS records.',
                    'Domain A record must point to VPS IP(139.59.80.60)'
                ],
                a: null,
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 155,
                name: 'www.hoopa.com',
                notes: null,
                lastUsed: null,
                registrationDate: 1481740200,
                expirationDate: 1513276200,
                expireIn: 16,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: ['Domain A record must point to VPS IP(139.59.70.45)'],
                a: ['72.52.4.120'],
                mx: [{exchange: 'localhost', preference: 0}],
                ns: ['ns1.sedoparking.com', 'ns2.sedoparking.com'],
                spf: [
                    'v=spf1 ip6:fd92:59f3:510e::/48 -all',
                    'v=spf1 ip6:fd92:59f3:510e::/48 -all'
                ]
            },
            {
                id: 156,
                name: 'add.test.com',
                notes: null,
                lastUsed: null,
                registrationDate: 866572200,
                expirationDate: 1560709800,
                expireIn: 565,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: ['69.172.200.109'],
                mx: null,
                ns: null,
                spf: ['v=spf1 ~all', 'v=spf1 ~all']
            },
            {
                id: 157,
                name: 'add1.test.com',
                notes: null,
                lastUsed: null,
                registrationDate: 866572200,
                expirationDate: 1560709800,
                expireIn: 565,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: ['69.172.200.109'],
                mx: null,
                ns: null,
                spf: ['v=spf1 ~all', 'v=spf1 ~all']
            },
            {
                id: 159,
                name: 'dfsfdgfhgj.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511932804,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: null,
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 160,
                name: 'test.com',
                notes: null,
                lastUsed: null,
                registrationDate: 866572200,
                expirationDate: 1560709800,
                expireIn: 565,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: ['69.172.200.235'],
                mx: [
                    {exchange: 'fallbackmx.spamexperts.eu', preference: 20},
                    {exchange: 'mx.spamexperts.com', preference: 10},
                    {exchange: 'lastmx.spamexperts.net', preference: 30}
                ],
                ns: ['ns65.worldnic.com', 'ns66.worldnic.com'],
                spf: ['v=spf1 ~all']
            },
            {
                id: 161,
                name: 'aaa.com',
                notes: null,
                lastUsed: null,
                registrationDate: 649621800,
                expirationDate: 1817145000,
                expireIn: 3533,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: ['209.82.215.216', '63.240.178.216'],
                mx: null,
                ns: ['xb.national.aaa.com', 'waldo.national.aaa.com'],
                spf: null
            },
            {
                id: 162,
                name: 'test12345.com',
                notes: null,
                lastUsed: null,
                registrationDate: 1103653800,
                expirationDate: 1513881000,
                expireIn: 23,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: ['50.63.202.9'],
                mx: [
                    {exchange: 'mailstore1.secureserver.net', preference: 10},
                    {exchange: 'smtp.secureserver.net', preference: 0}
                ],
                ns: ['ns46.domaincontrol.com', 'ns45.domaincontrol.com'],
                spf: null
            },
            {
                id: 163,
                name: 'test2.com',
                notes: null,
                lastUsed: null,
                registrationDate: 1022092200,
                expirationDate: 1527013800,
                expireIn: 175,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: null,
                mx: null,
                ns: [
                    'pri1.dns.uk.psi.net',
                    'pri3.dns.uk.psi.net',
                    'pri2.dns.uk.psi.net'
                ],
                spf: null
            },
            {
                id: 164,
                name: 'simtesting.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: null,
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 165,
                name: 'asdasdasd.asd',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511929803,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [
                    'Can not fetch DNS records.',
                    'Domain A record must point to VPS IP(139.59.75.197)',
                    'Whois information not found'
                ],
                a: null,
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 166,
                name: 'testx.com',
                notes: null,
                lastUsed: null,
                registrationDate: 1119119400,
                expirationDate: 1541874600,
                expireIn: 347,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: ['216.223.155.120'],
                mx: null,
                ns: [
                    'ns2.dnsmadeeasy.com',
                    'ns1.dnsmadeeasy.com',
                    'ns4.dnsmadeeasy.com',
                    'ns0.dnsmadeeasy.com',
                    'ns3.dnsmadeeasy.com'
                ],
                spf: null
            },
            {
                id: 167,
                name: 'textxx.com',
                notes: null,
                lastUsed: null,
                registrationDate: 1460658600,
                expirationDate: 1523730600,
                expireIn: 137,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [
                    'Can not fetch DNS records.',
                    'Domain A record must point to VPS IP(139.59.75.197)'
                ],
                a: null,
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 168,
                name: 'asd.com',
                notes: null,
                lastUsed: null,
                registrationDate: 840479400,
                expirationDate: 1534617000,
                expireIn: 263,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: ['198.46.84.198'],
                mx: null,
                ns: [
                    'ns2.sungardns.com',
                    'ns1.sungardns.com',
                    'ns3.sungardns.com'
                ],
                spf: null
            },
            {
                id: 169,
                name: 'testrt.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: null,
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 170,
                name: 'asdsads.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: null,
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 171,
                name: 'fd.com',
                notes: null,
                lastUsed: null,
                registrationDate: 889813800,
                expirationDate: 1520879400,
                expireIn: 104,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: ['216.87.148.114'],
                mx: [
                    {
                        exchange: 'us-smtp-inbound-1.mimecast.com',
                        preference: 10
                    },
                    {exchange: 'us-smtp-inbound-2.mimecast.com', preference: 10}
                ],
                ns: ['g4.nstld.com', 'f4.nstld.com', 'a4.nstld.com'],
                spf: null
            },
            {
                id: 172,
                name: 'mehull.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: null,
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 173,
                name: 'walter.com',
                notes: null,
                lastUsed: null,
                registrationDate: 782850600,
                expirationDate: 1666377000,
                expireIn: 1788,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: ['Domain A record must point to VPS IP(139.59.75.197)'],
                a: ['75.98.143.30'],
                mx: [
                    {
                        exchange: 'walter-com.mail.protection.outlook.com',
                        preference: 0
                    }
                ],
                ns: [
                    'dns1.uducat.com',
                    'dns2.uducat.com',
                    'titanium.uducat.com'
                ],
                spf: [
                    'v=spf1 ip4:75.98.143.26 ip4:24.104.123.115 include:spf.protection.outlook.com include:aspmx.pardot.com ~all',
                    'v=spf1 ip4:207.46.101.128/26 ip4:207.46.100.0/24 ip4:207.46.163.0/24 ip4:65.55.169.0/24 ip4:157.56.110.0/23 ip4:157.55.234.0/24 ip4:213.199.154.0/24 ip4:213.199.180.128/26 include:spfa.protection.outlook.com -all',
                    'v=spf1 ip4:157.56.112.0/24 ip4:207.46.51.64/26 ip4:157.55.158.0/23 ip4:64.4.22.64/26 ip4:40.92.0.0/14 ip4:40.107.0.0/17 ip4:40.107.128.0/17 ip4:134.170.140.0/24 include:spfb.protection.outlook.com ip6:2001:489a:2202::/48 -all',
                    'v=spf1 ip6:2a01:111:f400::/48 ip4:23.103.128.0/19 ip4:23.103.198.0/23 ip4:65.55.88.0/24 ip4:104.47.0.0/17 ip4:23.103.200.0/21 ip4:23.103.208.0/21 ip4:23.103.191.0/24 ip4:216.32.180.0/23 ip4:94.245.120.64/26 -all',
                    'v=spf1 include:et._spf.pardot.com -all',
                    'v=spf1 ip4:198.245.81.0/24 ip4:136.147.176.0/24 ip4:13.111.0.0/24 ip4:13.111.1.0/24 ip4:13.111.2.0/24 ip4:13.111.3.0/24 ip4:13.111.53.0/24 ip4:13.111.54.0/24 ip4:136.147.182.0/24 ip4:136.147.135.0/24 ip4:199.122.123.188/30 ip4:199.122.123.192 -all'
                ]
            },
            {
                id: 174,
                name: 'mehul.com',
                notes: null,
                lastUsed: null,
                registrationDate: 974917800,
                expirationDate: 1542911400,
                expireIn: 359,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: ['Domain A record must point to VPS IP(139.59.75.197)'],
                a: ['23.23.174.132'],
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 175,
                name: 'govind.test.in',
                notes: null,
                lastUsed: null,
                registrationDate: 1108578600,
                expirationDate: 1613500200,
                expireIn: 1176,
                blacklistUpdate: 1511929803,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: null,
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 176,
                name: 'sdfasdfdsafadsfdf.asdfasdf',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [
                    'Can not fetch DNS records.',
                    'Domain A record must point to VPS IP(139.59.75.197)',
                    'Whois information not found'
                ],
                a: null,
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 177,
                name: 'facebook.in',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'processing',
                errors: [],
                a: null,
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 178,
                name: 'rt1234.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'processing',
                errors: [],
                a: null,
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 179,
                name: 'rt1235.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'processing',
                errors: [],
                a: null,
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 180,
                name: 'rt123.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: false,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'processing',
                errors: [],
                a: null,
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 181,
                name: 'rttest.com',
                notes: null,
                lastUsed: null,
                registrationDate: 1479666600,
                expirationDate: 1542738600,
                expireIn: 357,
                blacklistUpdate: 1511928605,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: [
                    'hdredirect-lb3-890977680.us-east-1.elb.amazonaws.com',
                    '52.71.185.125',
                    '52.73.71.92'
                ],
                mx: null,
                ns: ['ns1.namebrightdns.com', 'ns2.namebrightdns.com'],
                spf: ['v=spf1 -all']
            },
            {
                id: 182,
                name: 'query.com',
                notes: null,
                lastUsed: null,
                registrationDate: 801340200,
                expirationDate: 1527100200,
                expireIn: 176,
                blacklistUpdate: 1511930404,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: ['66.45.248.2'],
                mx: [{exchange: 'query.com', preference: 0}],
                ns: [
                    'ns4.globeint.net',
                    'ns3.globeint.net',
                    'ns1.globeint.net',
                    'ns2.globeint.net'
                ],
                spf: null
            },
            {
                id: 183,
                name: 'query1.com',
                notes: null,
                lastUsed: null,
                registrationDate: 1134671400,
                expirationDate: 1608057000,
                expireIn: 1113,
                blacklistUpdate: 1511931005,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: ['0.0.0.0'],
                mx: [
                    {exchange: 'smtp.secureserver.net', preference: 0},
                    {exchange: 'mailstore1.secureserver.net', preference: 10}
                ],
                ns: ['ns36.domaincontrol.com', 'ns35.domaincontrol.com'],
                spf: null
            },
            {
                id: 184,
                name: 'query2.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511931005,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [
                    'Can not fetch DNS records.',
                    'Domain A record must point to VPS IP(139.59.75.197)'
                ],
                a: null,
                mx: null,
                ns: null,
                spf: null
            },
            {
                id: 185,
                name: 'query3.com',
                notes: null,
                lastUsed: null,
                registrationDate: null,
                expirationDate: null,
                expireIn: null,
                blacklistUpdate: 1511931005,
                blacklistDetails: [],
                isPaused: true,
                blacklistTimeseries: [
                    {checkedAt: 1511395200000, count: 0},
                    {checkedAt: 1511481600000, count: 0},
                    {checkedAt: 1511568000000, count: 0},
                    {checkedAt: 1511654400000, count: 0},
                    {checkedAt: 1511740800000, count: 0},
                    {checkedAt: 1511827200000, count: 0},
                    {checkedAt: 1511913600000, count: 0}
                ],
                status: 'invalid',
                errors: [''],
                a: null,
                mx: null,
                ns: null,
                spf: null
            }
        ]
    }
};
