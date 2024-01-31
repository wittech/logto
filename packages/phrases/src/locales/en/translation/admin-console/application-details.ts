const application_details = {
  page_title: 'Application details',
  back_to_applications: 'Back to applications',
  check_guide: 'Check guide',
  settings: 'Settings',
  settings_description:
    'An "Application" is a registered software or service that can access user info or act for a user. Applications help recognize who’s asking for what from Logto and handle the sign-in and permission. Fill in the required fields for authentication.',
  integration: 'Integration',
  integration_description:
    "Deploy with Logto secure workers, powered by Cloudflare's edge network for top-tier performance and 0ms cold starts worldwide.",
  service_configuration: 'Service configuration',
  service_configuration_description: 'Complete the necessary configurations in your service.',
  session: 'Session',
  endpoints_and_credentials: 'Endpoints & Credentials',
  endpoints_and_credentials_description:
    'Use the following endpoints and credentials to set up the OIDC connection in your application.',
  refresh_token_settings: 'Refresh token',
  refresh_token_settings_description: 'Manage the refresh token rules for this application.',
  application_roles: 'Roles',
  machine_logs: 'Machine logs',
  application_name: 'Application name',
  application_name_placeholder: 'My App',
  description: 'Description',
  description_placeholder: 'Enter your application description',
  config_endpoint: 'OpenID Provider configuration endpoint',
  authorization_endpoint: 'Authorization Endpoint',
  authorization_endpoint_tip:
    "The endpoint to perform authentication and authorization. It's used for OpenID Connect <a>Authentication</a>.",
  show_endpoint_details: 'Show endpoint details',
  hide_endpoint_details: 'Hide endpoint details',
  logto_endpoint: 'Logto endpoint',
  application_id: 'App ID',
  application_id_tip:
    'The unique application identifier normally generated by Logto. It also stands for “<a>client_id</a>” in OpenID Connect.',
  application_secret: 'App Secret',
  redirect_uri: 'Redirect URI',
  redirect_uris: 'Redirect URIs',
  redirect_uri_placeholder: 'https://your.website.com/app',
  redirect_uri_placeholder_native: 'io.logto://callback',
  redirect_uri_tip:
    'The URI redirects after a user sign-in (whether successful or not). See OpenID Connect <a>AuthRequest</a> for more info.',
  post_sign_out_redirect_uri: 'Post Sign-out Redirect URI',
  post_sign_out_redirect_uris: 'Post Sign-out Redirect URIs',
  post_sign_out_redirect_uri_placeholder: 'https://your.website.com/home',
  post_sign_out_redirect_uri_tip:
    'The URI redirects after a user sign-out (optional). It may have no practical effect in some app types.',
  cors_allowed_origins: 'CORS allowed origins',
  cors_allowed_origins_placeholder: 'https://your.website.com',
  cors_allowed_origins_tip:
    'By default, all the origins of Redirect URIs will be allowed. Usually no action is required for this field. See the <a>MDN doc</a> for detailed info.',
  token_endpoint: 'Token Endpoint',
  user_info_endpoint: 'Userinfo Endpoint',
  enable_admin_access: 'Enable admin access',
  enable_admin_access_label:
    'Enable or disable the access to Management API. Once enabled, you can use access tokens to call Management API on behalf on this application.',
  always_issue_refresh_token: 'Always issue Refresh Token',
  always_issue_refresh_token_label:
    'When enabled, Logto will always issue Refresh Tokens, regardless of whether `prompt=consent` is presented in the authentication request. However, this practice is discouraged unless necessary, as it is not compatible with OpenID Connect and may potentially cause issues.',
  refresh_token_ttl: 'Refresh Token Time to Live (TTL) in days',
  refresh_token_ttl_tip:
    'The duration for which a Refresh Token can be used to request new access tokens before it expires and becomes invalid. Token requests will extend the TTL of the Refresh Token to this value.',
  rotate_refresh_token: 'Rotate Refresh Token',
  rotate_refresh_token_label:
    'When enabled, Logto will issue a new Refresh Token for token requests when 70% of the original Time to Live (TTL) has passed or certain conditions are met. <a>Learn more</a>',
  delete_description:
    'This action cannot be undone. It will permanently delete the application. Please enter the application name <span>{{name}}</span> to confirm.',
  enter_your_application_name: 'Enter your application name',
  application_deleted: 'Application {{name}} has been successfully deleted',
  redirect_uri_required: 'You must enter at least one redirect URI',
  app_domain_description_1:
    'Feel free to use your subdomain with protected.app powered by Logto, which is permanently valid.',
  app_domain_description_2:
    'Feel free to utilize your domain <domain>{{domain}}</domain> which is permanently valid.',
  origin_url_tip:
    "Enter primary website address of your application, excluding any '/pathname'.\n\nNote: The Origin URL itself won't require authentication; only accesses via the added app domain will be protected.",
  custom_rules: 'Custom authentication rules',
  custom_rules_placeholder: '^/(admin|privacy)/.+$',
  custom_rules_description:
    'Set rules with regular expressions for authentication-required routes. Default: full-site protection if blank.',
  authentication_routes: 'Authentication routes',
  custom_rules_tip:
    "Here are two case scenarios:<ol><li>To only protect routes '/admin' and '/privacy' with authentication: ^/(admin|privacy)/.*</li><li>To exclude JPG images from authentication: ^(?!.*\\.jpg$).*$</li></ol>",
  authentication_routes_description:
    'Redirect your authentication button using the specified routes. Note: These routes are irreplaceable.',
  implement_jwt_verification: 'Implement JWT verification',
  implement_jwt_verification_description:
    'Validating JWT in your service before going online is essential for secure communications. Without it, your app will remain vulnerable to unauthorized access. Please <a>follow the guide</a>.',
  session_duration: 'Session duration (days)',
  try_it: 'Try it',
  branding: {
    name: 'Branding',
    description: "Customize your application's display name and logo on the consent screen.",
    more_info: 'More info',
    more_info_description: 'Offer users more details about your application on the consent screen.',
    display_name: 'Display name',
    display_logo: 'Display logo',
    display_logo_dark: 'Display logo (dark)',
    terms_of_use_url: 'Application terms of use URL',
    privacy_policy_url: 'Application privacy policy URL',
  },
  permissions: {
    name: 'Permissions',
    description:
      'Select the permissions that the third-party application requires for user authorization to access specific data types.',
    user_permissions: 'Personal user data',
    organization_permissions: 'Organization access',
    table_name: 'Grant permissions',
    field_name: 'Permission',
    field_description: 'Displayed in the consent screen',
    delete_text: 'Remove permission',
    permission_delete_confirm:
      'This action will withdraw the permissions granted to the third-party app, preventing it from requesting user authorization for specific data types. Are you sure you want to continue?',
    permissions_assignment_description:
      'Select the permissions the third-party application requests for user authorization to access specific data types.',
    user_profile: 'User data',
    api_resource: 'API resource',
    organization: 'Organization',
    user_permissions_assignment_form_title: 'Add the user profile permissions',
    organization_permissions_assignment_form_title: 'Add the organization permissions',
    api_resource_permissions_assignment_form_title: 'Add the API resource permissions',
    user_data_permission_description_tips:
      'You can modify the description of the personal user data permissions via "Sign-in Experience > Content > Manage Language"',
    permission_description_tips:
      'When Logto is used as an Identity Provider (IdP) for authentication in third-party apps, and users are asked for authorization, this description appears on the consent screen.',
  },
  roles: {
    name_column: 'Role',
    description_column: 'Description',
    assign_button: 'Assign roles',
    delete_description:
      'This action will remove this role from this machine-to-machine app. The role itself will still exist, but it will no longer be associated with this machine-to-machine app.',
    deleted: '{{name}} was successfully removed from this user.',
    assign_title: 'Assign roles to {{name}}',
    assign_subtitle: 'Authorize {{name}} one or more roles',
    assign_role_field: 'Assign roles',
    role_search_placeholder: 'Search by role name',
    added_text: '{{value, number}} added',
    assigned_app_count: '{{value, number}} applications',
    confirm_assign: 'Assign roles',
    role_assigned: 'Successfully assigned role(s)',
    search: 'Search by role name, description or ID',
    empty: 'No role available',
  },
};

export default Object.freeze(application_details);
