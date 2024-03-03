import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,

        models: {
            topTen: Model,
            line: Model,
            // dataset: Model,
            login: Model,
        },

        seeds(server) {
            server.create("topTen", {
                firstFive: [
                    { name: 'fdgdr gdf', balance: 5345 },
                    { name: 'fddr gdf', balance: 545 },
                    { name: 'fdgr gdf', balance: 355 },
                    { name: 'fdhgdr gdf', balance: 345 },
                    { name: 'fdegr gdf', balance: 35 },
                ],
                nextFive: [
                    { name: 'fdgdr gdf', balance: 5345 },
                    { name: 'fddr gdf', balance: 545 },
                    { name: 'fdgr gdf', balance: 355 },
                    { name: 'fdhgdr gdf', balance: 345 },
                    { name: 'fdegr gdf', balance: 35 },
                ]
            })
            server.create("login", {
                token: "1|233764s455teu8",
                user_id: 2234,
                isLoggedIn: true,
                // user_type: 'translator',
                user_type: 'admin',
                profile: {
                    user_id: 2234,
                    userName: "Tarif Ezaz",
                    user_email: "tarif_ezaz@test.com",
                    user_password: "123456789",
                    user_phone: "+8801723456789",
                    join_date: "23 May, 2021",
                    birthday: "22 March, 1993",
                    address: "Bashundhara, Dhaka, Bangladesh",
                    total_working_days: 435,
                    leaderboard_place: 45,
                    balance: 45,
                    total_balance: 395,
                    total_withdraw: 350,
                    for_approve: 45.34,
                    today_contribution: 5.78,
                    image_url: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png',
                },
                session_expiry: 0,
            })
            server.create("line", {
                newLine: "What you want to know ?",
                translatedLine: '',
            })
        
            server.db.loadData({
                datasets: [
                    {
                        dataset_id: 1,
                        dataset_name: 'dummy dataset 1',
                        total_lines: 78,
                        total_translated: 45,
                        for_review: 24,
                        remaining_lines: [
                            { line_id: 23, translator_id: 0, line: 'Who are you?', translated_line: '' },
                            { line_id: 24, translator_id: 0, line: 'What are you?', translated_line: '' },
                            { line_id: 25, translator_id: 0, line: 'Who are they?', translated_line: '' },
                        ],
                        translated_lines: [
                            { line_id: 3, translator_id: 10, line: 'Are you?', translated_line: 'dsfsr fjrur hdyet' },
                            { line_id: 4, translator_id: 19, line: 'What you?', translated_line: 'dsfr fjur hyet' },
                            { line_id: 5, translator_id: 12, line: 'Are they?', translated_line: 'dfsr jrur dyet' },
                        ],
                        reviewing_lines: [
                            { line_id: 3, translator_id: 2, line: 'Who are you?', translated_line: 'dsfsr fjrur hdyet' },
                            { line_id: 4, translator_id: 122, line: 'What are you?', translated_line: 'dsfr fjur hyet' },
                            { line_id: 5, translator_id: 162, line: 'Who are they?', translated_line: 'dfsr jrur dyet' },
                        ],
                    },
                    {
                        dataset_id: 11,
                        dataset_name: 'dummy dataset 11',
                        total_lines: 787,
                        total_translated: 145,
                        for_review: 224,
                        remaining_lines: [
                            { line_id: 23, translator_id: 0, line: 'Who are you?', translated_line: '' },
                            { line_id: 24, translator_id: 0, line: 'What are you?', translated_line: '' },
                            { line_id: 25, translator_id: 0, line: 'Who are they?', translated_line: '' },
                        ],
                        translated_lines: [
                            { line_id: 3, translator_id: 10, line: 'Are you?', translated_line: 'dsfsr fjrur hdyet' },
                            { line_id: 4, translator_id: 19, line: 'What you?', translated_line: 'dsfr fjur hyet' },
                            { line_id: 5, translator_id: 12, line: 'Are they?', translated_line: 'dfsr jrur dyet' },
                        ],
                        reviewing_lines: [
                            { line_id: 3, translator_id: 2, line: 'Who are you?', translated_line: 'dsfsr fjrur hdyet' },
                            { line_id: 4, translator_id: 122, line: 'What are you?', translated_line: 'dsfr fjur hyet' },
                            { line_id: 5, translator_id: 162, line: 'Who are they?', translated_line: 'dfsr jrur dyet' },
                        ],
                    }
                ],
            })
            server.db.loadData({
                customDatasets: [
                    {
                        dataset_id: 111,
                        dataset_name: 'dummy dataset 111',
                        user_id: 2234,
                        userName: 'Tarif Ezzaz',
                        total_lines: 0,
                        create_date: '22 February, 2024',
                        approval_status: 'Pending',
                        approval_date: '',
                        all_lines: [],
                    },
                    {
                        dataset_id: 112,
                        dataset_name: 'dummy dataset 112',
                        user_id: 2234,
                        userName: 'Tarif',
                        total_lines: 3,
                        create_date: '02 February, 2024',
                        approval_status: 'Approved',
                        approval_date: '05 February, 2024',
                        all_lines: [
                            { line_id: 3, line: 'Are you?', translated_line: 'dsfsr fjrur hdyet' },
                            { line_id: 4, line: 'What you?', translated_line: 'dsfr fjur hyet' },
                            { line_id: 5, line: 'Are they?', translated_line: 'dfsr jrur dyet' },
                        ],
                    }
                ],
            })
            server.db.loadData({
                withdraws: [
                    {
                        user_id: 2234,
                        withdraw_id: 533,
                        withdraw_date: '25 January, 2022',
                        prev_balance: 5233,
                        withdraw_amount: 233,
                        update_balance: 0,
                        withdraw_system: 'Bkash',
                        withdraw_info: '01758727366',
                        status: 'Pending',
                        remarks: 'okay',
                    },
                    {
                        user_id: 2234,
                        withdraw_id: 534,
                        withdraw_date: '26 January, 2022',
                        prev_balance: 523,
                        withdraw_amount: 33,
                        update_balance: 523,
                        withdraw_system: 'bank',
                        withdraw_info: 'Bank Asia - 23234017343458727366',
                        status: 'Rejected',
                        remarks: 'Fault input',
                    },
                    {
                        user_id: 2234,
                        withdraw_id: 543,
                        withdraw_date: '25 March, 2022',
                        prev_balance: 5323,
                        withdraw_amount: 533,
                        update_balance: 5856,
                        withdraw_system: 'Nagad',
                        withdraw_info: '01755723366',
                        status: 'Completed',
                        remarks: 'Problem was two times, but then.',
                    },
                    {
                        user_id: 234,
                        withdraw_id: 57342423343,
                        withdraw_date: '25 April, 2022',
                        prev_balance: 5232323,
                        withdraw_amount: 233,
                        update_balance: 0,
                        withdraw_system: 'Devit-card',
                        withdraw_info: '323dfdd501758727366',
                        status: 'Pending',
                        remarks: '',
                    },
                    {
                        user_id: 224,
                        withdraw_id: 593,
                        withdraw_date: '25 June, 2022',
                        prev_balance: 5233,
                        withdraw_amount: 23343433433,
                        update_balance: 5233,
                        withdraw_system: 'Credit-Card',
                        withdraw_info: 'adhadud, adasdis, 01758727366',
                        status: 'Rejected',
                        remarks: 'okay',
                    },
                ]
            })
        },

        routes() {
            this.namespace = "api/v1"

            this.post("/signup", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                // let authToken = request.re/questHeaders.Authorization
                console.log(attrs);
                // console.log(authToken);

                let headers = {}
                let data = { success: ["User SignUp Successfully."] }
                return new Response(201, headers, data)
            })

            this.post("/login", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                // let authToken = request.re/questHeaders.Authorization
                console.log(attrs);
                // console.log(authToken);

                // let headers = {}
                // let data = { success: ["Added for review"] }
                // return new Response(201, headers, data)
                // return schema.logins.find({user_email:attrs.user_email, user_password: attrs.user_password})
                return schema.logins.all()
            })

            this.delete("/logout", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

                let headers = {}
                let data = { success: ["Logout Successfully"] }
                return new Response(201, headers, data)

                // let id = request.params.id
                // return schema.movies.find(id).destroy()
            })


            // Using the `timing` option to slow down the response
            this.get("/leaderboard/topTen", (schema, request) => {
                return schema.topTens.all()
            })
            // }, { timing: 4000 })

            this.get("/new_line", (schema, request) => {
                return schema.db.datasets[0]
            })

            this.post("/translated_line", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);
                // return { movie: attrs }
                // return schema.movies.create(attrs)
                // return schema.db.datasets[0]
                // return schema.db.datasets[0].reviewing_lines.insert(attrs)
                // server.db.datasets[0].insert({ title: "The Dark Knight" })

                let headers = {}
                let data = { success: ["Added for review"] }
                return new Response(201, headers, data)
            })

            this.post("/profile_edit", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

                // let headers = {}
                // let data = { success: ["Profile info updated"] }
                // return new Response(201, headers, data)
                return schema.logins.all()
            })

            this.get("/withdraws/:user_id", (schema, request) => {
                let user_id = request.params.user_id
                // db.users.where({ name: 'Zelda' });
                // return {
                //     data: {
                //         id: movie.id,
                //         type: "movies",
                //         attributes: {
                //             title: movie.title,
                //         },
                //     },
                // }
                return schema.db.withdraws.where({ user_id: user_id })
            })

            this.post("/withdraw_request", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);
                // let headers = {}
                // let data = { success: ["New Dataset Created."] }
                // return new Response(201, headers, data)
                return schema.db.withdraws.where({ user_id: attrs.user_id })
            })

            this.get("/custom_datasets/:user_id", (schema, request) => {
                let user_id = request.params.user_id
                // db.users.where({ name: 'Zelda' });
                // return {
                //     data: {
                //         id: movie.id,
                //         type: "movies",
                //         attributes: {
                //             title: movie.title,
                //         },
                //     },
                // }
                return schema.db.customDatasets.where({ user_id: user_id })

            })

            this.post("/create_dataset", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);
                // let headers = {}
                // let data = { success: ["New Dataset Created."] }
                // return new Response(201, headers, data)
                return schema.db.customDatasets.where({ user_id: attrs.user_id })
            })

            this.post("/dataset_file_input", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);
                // let headers = {}
                // let data = { success: ["New file input in Dataset successfully."] }
                // return new Response(201, headers, data)
                return schema.db.customDatasets.where({ user_id: attrs.user_id })
            })

            this.post("/dataset_line_input", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);
                let headers = {}
                let data = { success: ["New line input in Dataset successfully."] }
                return new Response(201, headers, data)
            })







            this.get("/profile/:id", (schema, request) => {
                let id = request.params.id

                return schema.movies.find(id)
            })

            // Responding to a POST request
            this.post("/movies", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                // attrs.id = Math.floor(Math.random() * 100)

                // return { movie: attrs }
                return schema.movies.create(attrs)
            })

            this.patch("/movies/:id", (schema, request) => {
                let newAttrs = JSON.parse(request.requestBody)
                let id = request.params.id
                let movie = schema.movies.find(id)

                return movie.update(newAttrs)
            })

            // Using the `Response` class to return a 500
            this.delete("/movies/:id", (schema, request) => {
                // let headers = {}
                // let data = { errors: ["Server did not respond"] }
                // return new Response(500, headers, data)

                let id = request.params.id

                return schema.movies.find(id).destroy()
            })
        },
    })

    return server
}
