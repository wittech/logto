const quota_item = {
  tenant_limit: {
    name: 'Inquilinos',
    limited: '{{count, number}} inquilino',
    limited_other: '{{count, number}} inquilinos',
    unlimited: 'Inquilinos ilimitados',
    not_eligible: 'Eliminar tus inquilinos',
  },
  mau_limit: {
    name: 'Utilizadores ativos mensais',
    limited: '{{count, number}} MAU',
    unlimited: 'Utilizadores ativos mensais ilimitados',
    not_eligible: 'Remover todos os utilizadores',
  },
  applications_limit: {
    name: 'Aplicações',
    limited: '{{count, number}} aplicação',
    limited_other: '{{count, number}} aplicações',
    unlimited: 'Aplicações ilimitadas',
    not_eligible: 'Remover as tuas aplicações',
  },
  machine_to_machine_limit: {
    name: 'Máquina para máquina',
    limited: '{{count, number}} aplicação de máquina para máquina',
    limited_other: '{{count, number}} aplicações de máquina para máquina',
    unlimited: 'Aplicações de máquina para máquina ilimitadas',
    not_eligible: 'Remover as tuas aplicações de máquina para máquina',
  },
  resources_limit: {
    name: 'Recursos de API',
    limited: '{{count, number}} recurso de API',
    limited_other: '{{count, number}} recursos de API',
    unlimited: 'Recursos de API ilimitados',
    not_eligible: 'Remover os teus recursos de API',
  },
  scopes_per_resource_limit: {
    name: 'Permissões de recursos',
    limited: '{{count, number}} permissão por recurso',
    limited_other: '{{count, number}} permissões por recurso',
    unlimited: 'Permissão por recurso ilimitada',
    not_eligible: 'Remover as tuas permissões de recurso',
  },
  custom_domain_enabled: {
    name: 'Domínio personalizado',
    limited: 'Domínio personalizado',
    unlimited: 'Domínio personalizado',
    not_eligible: 'Remover o teu domínio personalizado',
  },
  omni_sign_in_enabled: {
    name: 'Omni sign-in',
    limited: 'Omni sign-in',
    unlimited: 'Omni sign-in',
    not_eligible: 'Desativar o teu omni sign-in',
  },
  built_in_email_connector_enabled: {
    name: 'Conector de e-mail incorporado',
    limited: 'Conector de e-mail incorporado',
    unlimited: 'Conector de e-mail incorporado',
    not_eligible: 'Remover o teu conector de e-mail incorporado',
  },
  social_connectors_limit: {
    name: 'Conectores sociais',
    limited: '{{count, number}} conector social',
    limited_other: '{{count, number}} conectores sociais',
    unlimited: 'Conectores sociais ilimitados',
    not_eligible: 'Remover os teus conectores sociais',
  },
  standard_connectors_limit: {
    name: 'Conectores padrão gratuitos',
    limited: '{{count, number}} conector padrão gratuito',
    limited_other: '{{count, number}} conectores padrão gratuitos',
    unlimited: 'Conectores padrão ilimitados',
    not_eligible: 'Remover os teus conectores padrão',
  },
  roles_limit: {
    name: 'Funções',
    limited: '{{count, number}} função',
    limited_other: '{{count, number}} funções',
    unlimited: 'Funções ilimitadas',
    not_eligible: 'Remover as tuas funções',
  },
  scopes_per_role_limit: {
    name: 'Permissões de função',
    limited: '{{count, number}} permissão por função',
    limited_other: '{{count, number}} permissões por função',
    unlimited: 'Permissão por função ilimitada',
    not_eligible: 'Remover as tuas permissões de função',
  },
  hooks_limit: {
    name: 'Hooks',
    limited: '{{count, number}} hook',
    limited_other: '{{count, number}} hooks',
    unlimited: 'Hooks ilimitados',
    not_eligible: 'Remover os teus hooks',
  },
  audit_logs_retention_days: {
    name: 'Conservação de registos de auditoria',
    limited: 'Conservação de registos de auditoria: {{count, number}} dia',
    limited_other: 'Conservação de registos de auditoria: {{count, number}} dias',
    unlimited: 'Dias ilimitados',
    not_eligible: 'Sem registos de auditoria',
  },
  community_support_enabled: {
    name: 'Apoio da comunidade',
    limited: 'Apoio da comunidade',
    unlimited: 'Apoio da comunidade',
    not_eligible: 'Sem apoio da comunidade',
  },
  customer_ticket_support: {
    name: 'Apoio de bilhetes de cliente',
    limited: '{{count, number}} hora de apoio de bilhetes de cliente',
    limited_other: '{{count, number}} horas de apoio de bilhetes de cliente',
    unlimited: 'Apoio de bilhetes de cliente',
    not_eligible: 'Sem apoio de bilhetes de cliente',
  },
};

export default quota_item;
