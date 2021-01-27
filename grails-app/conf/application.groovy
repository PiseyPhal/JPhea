//
//String ANONYMOUS_FILTERS = 'anonymousAuthenticationFilter,restTokenValidationFilter,restExceptionTranslationFilter,filterInvocationInterceptor'
//
//grails.plugin.springsecurity.userLookup.userDomainClassName = 'corebackend.security.SecUser'
//grails.plugin.springsecurity.userLookup.authorityJoinClassName ='corebackend.security.SecUserRole'
//grails.plugin.springsecurity.authority.className = 'corebackend.security.security.Role'
//grails.plugin.springsecurity.requestMap.className = 'corebackend.security.Requestmap'
//grails.plugin.springsecurity.securityConfigType = 'Requestmap'
//
//
//grails.plugin.springsecurity.rest.login.useJsonCredentials = true
//grails.plugin.springsecurity.rest.login.usernamePropertyName = "username"
//grails.plugin.springsecurity.rest.login.passwordPropertyName = "password"
//
//grails.plugin.springsecurity.logout.handlerNames = [
//        'rememberMeServices','securityContextLogoutHandler', 'customLogoutHandler'
//]
//grails.plugin.springsecurity.rest.logout.endpointUrl= "/api/logout"
//
//grails.plugin.springsecurity.useSecurityEventListener = true
//
//grails.plugin.springsecurity.filterChain.chainMap = [
//        [pattern: '/assets/**',      filters: 'none'],
//        [pattern: '/**/js/**',       filters: 'none'],
//        [pattern: '/**/css/**',      filters: 'none'],
//        [pattern: '/**/images/**',   filters: 'none'],
//        [pattern: '/**/favicon.ico', filters: 'none'],
//        [pattern: '/**',filters: 'JOINED_FILTERS,-exceptionTranslationFilter,-authenticationProcessingFilter,-securityContextPersistenceFilter,-rememberMeAuthenticationFilter'],
//        [pattern: '/auth/success', filters: ANONYMOUS_FILTERS],
//        [pattern: '/oauth/authenticate/google', filters: ANONYMOUS_FILTERS],
//        [pattern: '/oauth/authenticate/facebook', filters: ANONYMOUS_FILTERS],
//        [pattern: '/oauth/callback/facebook', filters: ANONYMOUS_FILTERS],
//        [pattern: '/oauth/callback/google', filters: ANONYMOUS_FILTERS],
//        [pattern: '/', filters: ANONYMOUS_FILTERS],
//        //Stateless chain
//        [pattern: '/api/**', filters: 'JOINED_FILTERS,-exceptionTranslationFilter,-authenticationProcessingFilter,-securityContextPersistenceFilter,-rememberMeAuthenticationFilter']
//]
//
//
//grails.plugin.springsecurity.controllerAnnotations.staticRules = [
//        //pomitted the rest for brevity
//        [pattern: '/api/logout', access: ['isAuthenticated()']
//        ]
//]
//
//
//grails {
//    plugin {
//        springsecurity {
//            rest {
//                token {
//                    validation {
//                        //user bearer token for validation
//                        useBearerToken = true
//                        enableAnonymousAccess = true
//                    }
//                    storage {
//                        //user Redis to store token
//                        useRedis = true
//                    }
//                }
//                oauth {
//                    // Call back url, after selecting your 2 oAuth provider.
//                    frontendCallbackUrl = { String tokenValue -> "http://localhost:8080/auth/success?token=${tokenValue}" }
//                    google {
//                        //Which pac4j client to use; in our case the Google client
//                        client = org.pac4j.oauth.client.Google2Client
//                        //Google Client_id
//                        key = '1061272590386-ivhha5p2jp4bighjv3m1sutm9s0mh5h6.apps.googleusercontent.com' //<6>
//                        //Google Client_secret
//                        secret = '_xRk2NugvjIZkrbkdeqV6JF_' //<7>
//                        //The scope can be from any value of the enum org.pac4j.oauth.client.Google2Client.Google2Scope
//                        scope = org.pac4j.oauth.client.Google2Client.Google2Scope.EMAIL_AND_PROFILE //<8>
//                        //Default role set to role google
//                        defaultRoles = ['ROLE_GOOGLE'] //<9>
//                    }
//                    facebook {
//                        client = org.pac4j.oauth.client.FacebookClient
//                        key = '588876421538466'
//                        secret = 'bd6f8b963383834a7d57873af20c7e1b'
//                        scope = 'public_profile,email'
//                        fields = 'id,name,first_name,middle_name,last_name,username'
//                        defaultRoles = ['ROLE_FACEBOOK']
//                    }
//                }
//            }
//            providerNames = ['anonymousAuthenticationProvider','daoAuthenticationProvider'] // <10>
//        }
//
//    }
//
//    mail {
//        host = "smtp.zoho.com"
//        port = 465
//        username = "noreply@ecoinsoft.com"
//        password = "3c0!Soft2018"
//        props = ["mail.smtp.auth":"true",
//                 "mail.smtp.socketFactory.port":"465",
//                 "mail.smtp.socketFactory.class":"javax.net.ssl.SSLSocketFactory",
//                 "mail.smtp.socketFactory.fallback":"false"]
//    }
//}
//
//grails.mail.default.from = "noreply@ecoinsoft.com"
//grails.server.port.http = 8090
//
//grails.views.default.codec = "html"



